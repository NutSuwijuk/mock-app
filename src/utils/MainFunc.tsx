const MainFunc = {
    numberWithCommas(num?: number | string): string {
        if (num !== undefined && num !== null) {
            const numStr = num.toString();
            if (numStr.includes(".")) {
                let [integerPart, decimalPart] = numStr.split(".");
                let formattedInt = parseInt(integerPart).toLocaleString("en-US");
                decimalPart = decimalPart.length === 1 ? decimalPart + "0" : decimalPart;
                return `${formattedInt}.${decimalPart}`;
            } else {
                let formattedNum = parseInt(numStr).toFixed(2);
                return formattedNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }
        return "0.00";
    },
    setMonth(monthArrIndex: number, isFull: boolean, lang: string): string {
        const months_th = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
        const months_th_mini = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
        const months_en = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        if (process.env.NEXT_PUBLIC_LANGUAGE_LOCALE === "th") {
            return isFull ? months_th[monthArrIndex] : months_th_mini[monthArrIndex];
        }
        return months_en[monthArrIndex];
    }
};

export default MainFunc;