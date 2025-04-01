import TestDetail from "@/components/Test/TestDetail";
import TestService from "@/services/Test/test.service";
interface Slug {
    slug: string
}

export default async function TestDetailWrapper({params}: {params: Promise<Slug>}) {
    const { slug } = await params;
    const testService = new TestService();
    const response = await testService.detail(slug??"");
    console.log("response : ", response);
    return <TestDetail data={response}/>
}

 