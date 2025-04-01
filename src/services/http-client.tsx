import ExceptionHandler from "./handler/exception.handler";

export default class HttpClient {
  headers: any = { "Content-Type": "application/json" }
  headersFormData: any = {}

  constructor() {
  }



  async getRequest(url: string): Promise<any | null> {
    // this.buildHeader();
    try {
      let response = await fetch(url, {
        method: "GET",
        headers: this.headers
      });
      if (response.status == 200) {
        // console.log('getRequest', await response.json())
        return await response.json();
      }
      return new ExceptionHandler(response.status, response.statusText)
    } catch (e: any) {
      console.log("Exception: ", e.toString())
      return new ExceptionHandler(500);
    }
  }

  async postRequest(url: string, request: any): Promise<any | null> {
    // this.buildHeader();
    try {
      let response = await fetch(url, {
        "method": "POST",
        "headers": this.headers,
        "body": request != null ? JSON.stringify(request) : null
      });
      if (response.status == 401) {
        let refreshedToken = await this.refreshToken();
        if (refreshedToken) {
          return await this.deleteRequest(url);
        } else {
          return new ExceptionHandler(response.status, response.statusText)
        }
      }
      else if (response.status == 200 || response.status == 201) {
        return await response.json();
      }
      return new ExceptionHandler(response.status, response.statusText)
    } catch (e: any) {
      console.log("Exception: ", e.toString())
      return new ExceptionHandler(500);
    }
  }

  async deleteRequest(url: string): Promise<any | null> {
    // this.buildHeader();
    try {
      let response = await fetch(url, {
        "method": "DELETE",
        "headers": this.headers
      });
      if (response.status == 401) {
        let refreshedToken = await this.refreshToken();
        if (refreshedToken) {
          return await this.deleteRequest(url);
        } else {
          return new ExceptionHandler(response.status, response.statusText)
        }
      }
      else if (response.status == 200) {
        return await response.json();
      }
      return new ExceptionHandler(response.status, response.statusText)
    } catch (e: any) {
      console.log("Exception: ", e.toString())
      return new ExceptionHandler(500);
    }
  }

  async putRequest(url: string, request: any): Promise<any | null> {
    // this.buildHeader();
    try {
      let response = await fetch(url, {
        "method": "PUT",
        "headers": this.headers,
        "body": request != null ? JSON.stringify(request) : null
      });
      if (response.status == 401) {
        let refreshedToken = await this.refreshToken();
        if (refreshedToken) {
          return await this.putRequest(url, request);
        } else {
          return new ExceptionHandler(response.status, response.statusText)
        }
      }
      if (response.status == 200 || response.status == 201) {
        return await response.json();
      }
      return new ExceptionHandler(response.status, response.statusText)
    } catch (e: any) {
      console.log("Exception: ", e.toString())
      return new ExceptionHandler(500);
    }
  }

  async refreshToken(): Promise<boolean> {
    let status = false;
    let url = "";
    let request: any = {};
    request['refreshToken'] = localStorage.getItem('refreshToken');
    try {
      let response = await fetch(url, {
        "method": "POST",
        // "headers": "",
        "body": JSON.stringify(request)
      });
      if (response.status === 200) {
        /* ----- store new token ----- */
        let res = await response.json() as any;
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        status = true;
      } else {
        console.log("Error while do refresh token ", response.statusText)
      }
    } catch (e: any) {
      console.log("Error while do refresh token ", e.toString())
    }
    return status;
  }
}
