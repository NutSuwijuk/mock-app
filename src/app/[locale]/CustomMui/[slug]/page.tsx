
import MTextFieldEx from "@/components/CustomMui/MTextFieldEx";
import MTransferListEX from "@/components/CustomMui/MTransferListEx";
import styles from "@/styles/CustomMui/page.module.scss"
import Navbar from "@/components/NavBar";
interface Slug {
    slug: string
}

export default async function TestDetailWrapper({ params }: { params: Promise<Slug> }) {
    const { slug } = await params;
    return (
        <div className={styles.page}>
            <header className="header">
                < Navbar />
            </header>
            <main className={styles.main}>
                {slug === "MTextField" ? <MTextFieldEx /> : ""}
                {slug === "MTransferList" ? <MTransferListEX /> : ""}
            </main>
        </div>
    )

}

