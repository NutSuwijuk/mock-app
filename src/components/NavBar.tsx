"use client";

import { ReactNode, useEffect, useState, Fragment, useRef, RefObject } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from 'next-intl';
import useClickOutside from "@/hooks/useClickOutside";
import styles from "@/styles/NavBar.module.scss"
export default function Navbar() {
    const router = useRouter();
    const locale = useLocale();
    const pathname = usePathname();
    const [menu, setMenu] = useState("personal");
    const [chargLang, setChargLang] = useState(false);
    const [subMenu, setSubMenu] = useState("");
    const [actionLogin, setActionLogin] = useState(false);
    const [mnuToggle, setMnuToggle] = useState(false);
    const [menuMobile, setMenuMobile] = useState("personal");
    const [footerMenuMobile, setFooterMenuMobile] = useState("personal");
    const subMenuRef = useRef(null);
    useClickOutside(subMenuRef, () => setSubMenu(""));
    useEffect(() => {

    }, []);

    const changeLanguage = (newLocale: string) => {
        if (newLocale !== locale) {
          router.push(`/${newLocale}${pathname.slice(3)}`); // เปลี่ยน URL ตามภาษาใหม่
        }
      };
    return (
        <Fragment>
            {/* -------------------------  Start Desktop   ------------------------------- */}
            <div className={`${styles.headerDesktop} ${styles.visibleDesktop}`}>
                <div className={styles.topbarMenu}>
                    <div className={styles.topbarMenuInner}>
                        <div className={styles.aLeft}>
                            <div className={styles.logoKbank}>
                                <a
                                    href="/"
                                    title="Logo Kbank"
                                >
                                    <img
                                        className={styles.logo1}
                                        src="/next.svg"
                                        alt="Logo Kbank"
                                    />
                                    <img
                                        className={styles.logo2}
                                        src="/next.svg"
                                        alt="Logo Kbank"
                                    />
                                </a>
                            </div>
                            <div className={styles.navList}>
                                <a
                                    // href="https://www.kasikornbank.com/th/personal"
                                    onClick={() => {
                                        setMenu("personal");
                                        setSubMenu("");
                                    }}
                                    // target="_self"
                                    className={`${styles.mainNavHeader} ${menu == "personal" ? styles.active : ""
                                        }`}
                                    title="ลูกค้าบุคคล"
                                    data-nav="personal"
                                >
                                    <i className="ic-nvg ic-nav-icon_personal"></i>ลูกค้าบุคคล
                                </a>
                                <a
                                    // href="https://www.kasikornbank.com/th/business"
                                    onClick={() => {
                                        setMenu("business");
                                        setSubMenu("");
                                    }}
                                    // target="_self"
                                    className={`${styles.mainNavHeader} ${menu == "business" ? styles.active : ""
                                        }`}
                                    title="ลูกค้าธุรกิจ"
                                    data-nav="business"
                                >
                                    <i className="ic-nvg ic-nav-icon_business"></i>ลูกค้าธุรกิจ
                                </a>
                                <a
                                    // href="javascript:void(0);"
                                    onClick={() => {
                                        setMenu("wealth");
                                        setSubMenu("");
                                    }}
                                    // target="_self"
                                    className={`${styles.mainNavHeader} ${menu == "wealth" ? styles.active : ""
                                        }`}
                                    title="ลูกค้า Wealth"
                                    data-nav="wealth"
                                >
                                    <i className="ic-nvg ic-nav-icon_wealth"></i>ลูกค้า Wealth
                                </a>
                            </div>
                        </div>
                        <div className={styles.aRight}>
                            <div className={styles.actionSearch}>
                                <div className={styles.headerContactSearch}>
                                    <a
                                        className={`${styles.mainNavHeader} ${styles.search}`}
                                        title="search"
                                        data-nav="search"
                                    >
                                        <i
                                            className="ic-nvg ic-nav-icon_search"
                                            role="button"
                                        ></i>
                                    </a>
                                </div>
                                <div className={styles.footerContactLang}>
                                    <div
                                        onClick={()=>{setChargLang(!chargLang);}}
                                        className={`${styles.switchLang}`}
                                    >
                                        <img
                                            className={locale == "th" ? styles.show : ""}
                                            src="https://www.kasikornbank.com/SiteCollectionDocuments/assets/theme-navigation/img/lang-th.svg"
                                            alt="TH"
                                        />
                                        <img
                                            className={locale == "en" ? styles.show : ""}
                                            src="https://www.kasikornbank.com/SiteCollectionDocuments/assets/theme-navigation/img/lang-en.svg"
                                            alt="EN"
                                        />
                                    </div>
                                    <div
                                        className={`${styles.switchLangChange} ${chargLang?styles.action:""}`}
                                    >
                                        <div
                                            className={locale != "th" ? styles.show : ""}
                                            onClick={()=> changeLanguage("th")}
                                        >
                                            <img
                                                src="https://www.kasikornbank.com/SiteCollectionDocuments/assets/theme-navigation/img/lang-th.svg"
                                                alt="TH"
                                            />
                                            TH
                                        </div>
                                        <div
                                            className={locale != "en" ? styles.show : ""}
                                            onClick={()=> changeLanguage("en")}
                                        >
                                            <img
                                                src="https://www.kasikornbank.com/SiteCollectionDocuments/assets/theme-navigation/img/lang-en.svg"
                                                alt="EN"
                                            />
                                            EN
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${styles.actionLogin} ${actionLogin ? styles.active : ""
                                    }`}
                            >
                                <a
                                    className={styles.btnLogin}
                                    // name="actionLogin"
                                    onClick={() =>
                                        setActionLogin(!actionLogin)
                                    }
                                >
                                    {/* เข้าสู่ระบบ */}
                                    ออกจากระบบ
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.midbarMenu}>
                    <div ref={subMenuRef} className={styles.midbarMenuInner}>
                        <div className={styles.col}>
                            {/* menu ลูกค้าบุคคล */}
                            <div
                                className={`${styles.navList} ${menu == "personal" ? styles.active : ""
                                    }`}
                                data-nav="personal"
                            >
                                <ul className={styles.bottombarNavList}>
                                    <li
                                        className={
                                            subMenu == "account" &&
                                                menu == "personal"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            // href="javascript:void(0);"
                                            onClick={() => {
                                                // this.setState({ subMenu: "account" });
                                                setSubMenu(subMenu === "account" ? "" : "account")
                                            }}
                                            // target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_บัญชี"
                                            data-tag="personal"
                                            data-id="account"
                                        >
                                            บัญชี
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            subMenu == "card" &&
                                                menu == "personal"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            // href="javascript:void(0);"
                                            onClick={() => {
                                                setSubMenu(subMenu === "card" ? "" : "card")
                                            }}
                                            // target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_บัตร"
                                            data-tag="personal"
                                            data-id="card"
                                        >
                                            บัตร
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            subMenu == "loan" &&
                                                menu == "personal"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            // href="javascript:void(0);"
                                            onClick={() => {
                                                setSubMenu(subMenu === "loan" ? "" : "loan")
                                            }}
                                            // target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_สินเชื่อ"
                                            data-tag="personal"
                                            data-id="loan"
                                        >
                                            สินเชื่อ
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            subMenu == "invest" &&
                                                menu == "personal"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            // href="javascript:void(0);"
                                            onClick={() => {
                                                setSubMenu(subMenu === "invest" ? "" : "invest")
                                            }}
                                            // target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_ลงทุน"
                                            data-tag="personal"
                                            data-id="invest"
                                        >
                                            ลงทุน
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            subMenu == "insurance" &&
                                                menu == "personal"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            // href="javascript:void(0);"
                                            onClick={() => {
                                                setSubMenu(subMenu === "insurance" ? "" : "insurance")
                                            }}
                                            // target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_ประกัน"
                                            data-tag="personal"
                                            data-id="insurance"
                                        >
                                            ประกัน
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            subMenu == "digital" &&
                                                menu == "personal"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            // href="javascript:void(0);"
                                            onClick={() => {
                                                setSubMenu(subMenu === "digital" ? "" : "digital")
                                            }}
                                            // target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_ดิจิทัลแบงก์กิ้ง"
                                            data-tag="personal"
                                            data-id="digital"
                                        >
                                            ดิจิทัลแบงก์กิ้ง
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            subMenu == "payment" &&
                                                menu == "personal"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            // href="javascript:void(0);"
                                            onClick={() => {
                                                setSubMenu(subMenu === "payment" ? "" : "payment")
                                            }}
                                            // target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_โอนเงิน / ชำระเงิน"
                                            data-tag="personal"
                                            data-id="payment"
                                        >
                                            โอนเงิน / ชำระเงิน
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            subMenu == "service" &&
                                                menu == "personal"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            // href="javascript:void(0);"
                                            onClick={() => {
                                                setSubMenu(subMenu === "service" ? "" : "service")
                                            }}
                                            // target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_บริการ"
                                            data-tag="personal"
                                            data-id="service"
                                        >
                                            บริการ
                                        </a>
                                    </li>
                                </ul>
                                <ul className={styles.bottombarNavList}>
                                    <li
                                        className={
                                            subMenu == "promotion" &&
                                                menu == "personal"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            // href="javascript:void(0);"
                                            onClick={() => {
                                                setSubMenu(subMenu === "promotion" ? "" : "promotion")
                                            }}
                                            // target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_โปรโมชัน"
                                            data-tag="personal"
                                            data-id="promotion"
                                        >
                                            โปรโมชัน
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            subMenu == "blog" &&
                                                menu == "personal"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            // href="javascript:void(0);"
                                            onClick={() => {
                                                setSubMenu(subMenu === "loan" ? "" : "blog")
                                            }}
                                            // target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_บทความ"
                                            data-tag="personal"
                                            data-id="blog"
                                        >
                                            บทความ
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* menu ลูกค้าธุรกิจ */}
                            <div
                                className={`${styles.navList} ${menu == "business" ? styles.active : ""
                                    }`}
                                data-nav="business"
                            >
                                <ul className={styles.bottombarNavList}>
                                    <li
                                        className={
                                            subMenu == "loan" &&
                                                menu == "business"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            onClick={() => {
                                                setSubMenu(subMenu === "loan" ? "" : "loan")
                                            }}
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_สินเชื่อ"
                                            data-tag="business"
                                            data-id="loan"
                                        >
                                            สินเชื่อ
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            subMenu == "paybill" &&
                                                menu == "business"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            onClick={() => {
                                                setSubMenu(subMenu === "paybill" ? "" : "paybill")
                                            }}
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_บริการชำระ / รับชำระเงิน"
                                            data-tag="business"
                                            data-id="paybill"
                                        >
                                            บริการชำระ / รับชำระเงิน
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            subMenu == "digital" &&
                                                menu == "business"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            onClick={() => {
                                                setSubMenu(subMenu === "digital" ? "" : "digital")
                                            }}
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_ดิจิทัลแบงก์กิ้ง"
                                            data-tag="business"
                                            data-id="digital"
                                        >
                                            ดิจิทัลแบงก์กิ้ง
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            subMenu == "international" &&
                                                menu == "business"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            onClick={() => {
                                                setSubMenu(subMenu === "international" ? "" : "international")
                                            }}
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_ระหว่างประเทศ"
                                            data-tag="business"
                                            data-id="international"
                                        >
                                            ระหว่างประเทศ
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            subMenu == "invest" &&
                                                menu == "business"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            onClick={() => {
                                                setSubMenu(subMenu === "invest" ? "" : "invest")
                                            }}
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_ลงทุน"
                                            data-tag="business"
                                            data-id="invest"
                                        >
                                            ลงทุน
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            subMenu == "account" &&
                                                menu == "business"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            onClick={() => {
                                                setSubMenu(subMenu === "account" ? "" : "account")
                                            }}
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_บัญชี"
                                            data-tag="business"
                                            data-id="account"
                                        >
                                            บัญชี
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            subMenu == "business-card" &&
                                                menu == "business"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            onClick={() => {
                                                setSubMenu(subMenu === "business-card" ? "" : "business-card")
                                            }}
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_บัตรธุรกิจ"
                                            data-tag="business"
                                            data-id="business-card"
                                        >
                                            บัตรธุรกิจ
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            subMenu == "insurance" &&
                                                menu == "business"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            onClick={() => {

                                                setSubMenu(subMenu === "insurance" ? "" : "insurance")
                                            }}
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_ประกัน"
                                            data-tag="business"
                                            data-id="insurance"
                                        >
                                            ประกัน
                                        </a>
                                    </li>
                                    <li
                                        className={
                                            subMenu == "service" &&
                                                menu == "business"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            onClick={() => {
                                                setSubMenu(subMenu === "service" ? "" : "service")
                                            }}
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_บริการ"
                                            data-tag="business"
                                            data-id="service"
                                        >
                                            บริการ
                                        </a>
                                    </li>
                                </ul>
                                <ul className={styles.bottombarNavList}>
                                    <li
                                        className={
                                            subMenu == "blog" &&
                                                menu == "business"
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <a
                                            onClick={() => {
                                                setSubMenu(subMenu === "blog" ? "" : "blog")
                                            }}
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_บทความ"
                                            data-tag="business"
                                            data-id="blog"
                                        >
                                            บทความ
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* menu ลูกค้า Wealth */}
                            <div
                                className={`${styles.navList} ${menu == "wealth" ? styles.active : ""
                                    }`}
                                data-nav="wealth"
                            >
                                <ul className={styles.bottombarNavList}>
                                    <li>
                                        <a
                                            href="https://www.kasikornbank.com/th/personal/privatebanking/pages/default.aspx"
                                            target="_self"
                                            className="link-to wealth_product_nav_header"
                                            title="ลูกค้า_Wealth_KBank_Private_Banking"
                                            data-tag="wealth"
                                            data-id="hmenu_id_21"
                                        >
                                            KBank Private Banking
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.kasikornbank.com/th/personal/the-wisdom"
                                            target="_self"
                                            className="link-to wealth_product_nav_header"
                                            title="ลูกค้า_Wealth_THE_WISDOM"
                                            data-tag="wealth"
                                            data-id="hmenu_id_22"
                                        >
                                            THE WISDOM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.kasikornbank.com/th/personal/the-premier"
                                            target="_self"
                                            className="link-to wealth_product_nav_header"
                                            title="ลูกค้า_Wealth_THE_PREMIER"
                                            data-tag="wealth"
                                            data-id="hmenu_id_23"
                                        >
                                            THE PREMIER
                                        </a>
                                    </li>
                                </ul>
                                <ul className={styles.bottombarNavList}>
                                    <li>
                                        <a
                                            href="https://www.kasikornbank.com/th/kwealth/pages/index.aspx"
                                            target="_self"
                                            className="link-to wealth_product_nav_header"
                                            title="ลูกค้า_Wealth_บทความ K WEALTH"
                                            data-tag="wealth"
                                            data-id="hmenu_id_24"
                                        >
                                            บทความ K WEALTH
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* menu นักลงทุนสัมพันธ์ */}
                            <div
                                className={`${styles.navList} ${menu == "investor" ? styles.active : ""
                                    }`}
                                data-nav="investor"
                            >
                                <ul className={styles.bottombarNavList}>
                                    <li>
                                        <a
                                            href="https://www.kasikornbank.com/th/ir/corporategovernance"
                                            target="_self"
                                            className="link-to investor_nav_header"
                                            title="นักลงทุนสัมพันธ์_การกำกับดูแลกิจการ"
                                            data-tag="investor"
                                            data-id="hmenu_id_16"
                                        >
                                            การกำกับดูแลกิจการ
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.kasikornbank.com/th/ir/generalinformation"
                                            target="_self"
                                            className="link-to investor_nav_header"
                                            title="นักลงทุนสัมพันธ์_ข้อมูลทั่วไป"
                                            data-tag="investor"
                                            data-id="hmenu_id_17"
                                        >
                                            ข้อมูลทั่วไป
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.kasikornbank.com/th/ir/finaninforeports"
                                            target="_self"
                                            className="link-to investor_nav_header"
                                            title="นักลงทุนสัมพันธ์_ข้อมูลทางการเงิน"
                                            data-tag="investor"
                                            data-id="hmenu_id_18"
                                        >
                                            ข้อมูลทางการเงิน
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.kasikornbank.com/th/ir/presentationjournal"
                                            target="_self"
                                            className="link-to investor_nav_header"
                                            title="นักลงทุนสัมพันธ์_ข้อมูลนำเสนอและวารสาร"
                                            data-tag="investor"
                                            data-id="hmenu_id_19"
                                        >
                                            ข้อมูลนำเสนอและวารสาร
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.kasikornbank.com/th/ir/shareholderservices"
                                            target="_self"
                                            className="link-to investor_nav_header"
                                            title="นักลงทุนสัมพันธ์_บริการผู้ถือหุ้น"
                                            data-tag="investor"
                                            data-id="hmenu_id_257"
                                        >
                                            บริการผู้ถือหุ้น
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* ลูกค้าบุคคล บัญชี */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "account" &&
                                menu == "personal"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="personal"
                            data-id="account"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <a
                                            className={`${styles.txt} personal_product_nav_header`}
                                            title="ลูกค้าบุคคล_บัญชี_หน้าหลักบัญชี"
                                            href="https://www.kasikornbank.com/th/personal/pages/account.aspx"
                                            target="_self"
                                        >
                                            หน้าหลักบัญชี <span className={styles.icArrow}></span>
                                        </a>
                                        <ul className={styles.listTxt}>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_บัญชี_เงินฝากออมทรัพย์อิเล็กทรอนิกส์"
                                                    href="https://www.kasikornbank.com/th/personal/pages/account.aspx#digital"
                                                    target="_self"
                                                >
                                                    เงินฝากออมทรัพย์อิเล็กทรอนิกส์
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_บัญชี_เงินฝากออมทรัพย์"
                                                    href="https://www.kasikornbank.com/th/personal/pages/account.aspx#savings"
                                                    target="_self"
                                                >
                                                    เงินฝากออมทรัพย์
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_บัญชี_เงินฝากประจํา"
                                                    href="https://www.kasikornbank.com/th/personal/pages/account.aspx#fixed"
                                                    target="_self"
                                                >
                                                    เงินฝากประจํา
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_บัญชี_เงินฝากระแสรายวัน"
                                                    href="https://www.kasikornbank.com/th/personal/pages/account.aspx#current"
                                                    target="_self"
                                                >
                                                    เงินฝากระแสรายวัน
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_บัญชี_เงินฝากเงินตราต่างประเทศ"
                                                    href="https://www.kasikornbank.com/th/personal/pages/account.aspx#foreign"
                                                    target="_self"
                                                >
                                                    เงินฝากเงินตราต่างประเทศ
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ลูกค้าบุคคล บัตร */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "card" && menu == "personal"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="personal"
                            data-id="card"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <div className={styles.txt}>เลือกบัตร</div>
                                        <ul className={styles.listTxt}>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_บัตร_บัตรเดบิต"
                                                    href="https://www.kasikornbank.com/th/personal/debitcard/pages/debitcard.aspx"
                                                    target="_self"
                                                >
                                                    บัตรเดบิต
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_บัตร_บัตรเครดิต"
                                                    href="https://www.kasikornbank.com/th/personal/CreditCard/Pages/creditcard.aspx"
                                                    target="_self"
                                                >
                                                    บัตรเครดิต
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_บัตร_บัตรเครดิตลูกค้าพิเศษ"
                                                    href="https://www.kasikornbank.com/th/personal/creditcard/pages/all-creditcard.aspx#exclusive"
                                                    target="_self"
                                                >
                                                    บัตรเครดิตลูกค้าพิเศษ
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_บัตร_บัตรเงินด่วน"
                                                    href="https://www.kasikornbank.com/th/personal/Loan/PersonalLoan/Pages/Xpresscash.aspx"
                                                    target="_self"
                                                >
                                                    บัตรเงินด่วน
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.colAuto}>
                                <div className={styles.inner}>
                                    <div className={styles.action}>
                                        <a
                                            className={`${styles.btn} personal_product_nav_header`}
                                            title="ลูกค้าบุคคล_บัตร_สมัครบัตรเดบิต"
                                            href="https://www.kasikornbank.com/th/kplus/instruction/debit-card"
                                            target="_self"
                                        >
                                            สมัครบัตรเดบิต
                                        </a>
                                        <a
                                            className={`${styles.btn} personal_product_nav_header`}
                                            title="ลูกค้าบุคคล_บัตร_สมัครบัตรเครดิต"
                                            href="https://www.kasikornbank.com/th/personal/CreditCard/Pages/creditcard.aspx#apply"
                                            target="_self"
                                        >
                                            สมัครบัตรเครดิต
                                        </a>
                                        <a
                                            className={`${styles.btn} personal_product_nav_header`}
                                            title="ลูกค้าบุคคล_บัตร_สมัครบัตรเงินด่วน"
                                            href="https://www.kasikornbank.com/th/personal/Loan/PersonalLoan/Pages/Xpresscash.aspx#apply"
                                            target="_self"
                                        >
                                            สมัครบัตรเงินด่วน
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ลูกค้าบุคคล สินเชื่อ */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "loan" && menu == "personal"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="personal"
                            data-id="loan"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <div className={styles.rowFlex}>
                                            <div className={styles.col4}>
                                                <div className={styles.txt}>เลือกสินเชื่อ</div>
                                                <ul className={styles.listTxt}>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_สินเชื่อ_สินเชื่อบุคคล"
                                                            href="https://www.kasikornbank.com/th/personal/loan/personal-loan/pages/personal-loan_index.aspx"
                                                            target="_self"
                                                        >
                                                            สินเชื่อบุคคล
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_สินเชื่อ_สินเชื่อบ้าน"
                                                            href="https://www.kasikornbank.com/th/personal/Loan/Home-Loan/Pages/Home-Loan_Index.aspx"
                                                            target="_self"
                                                        >
                                                            สินเชื่อบ้าน
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_สินเชื่อ_สินเชื่อรถ"
                                                            href="https://www.kasikornbank.com/th/personal/Loan/Car-Loan/Pages/Car_loan_Index.aspx"
                                                            target="_self"
                                                        >
                                                            สินเชื่อรถ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_สินเชื่อ_ค้นหาทรัพย์มือสองธนาคาร"
                                                            href="https://www.kasikornbank.com/th/PropertyForSale/Pages/home.aspx"
                                                            target="_self"
                                                        >
                                                            ค้นหาทรัพย์มือสองธนาคาร
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={styles.col4}>
                                                <div className={styles.txt}>สินเชื่อแนะนำ</div>
                                                <ul className={styles.listTxt}>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_สินเชื่อ_รวมสินเชื่อ KBank ช่วยได้เมื่อช็อต"
                                                            href="https://www.kasikornbank.com/th/personal/loan/personalloan/pages/all-loan.aspx"
                                                            target="_self"
                                                        >
                                                            รวมสินเชื่อ KBank ช่วยได้เมื่อช็อต
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.colAuto}>
                                <div className={styles.inner}>
                                    <div className={styles.action}>
                                        <a
                                            className={`${styles.btn} personal_product_nav_header`}
                                            title="ลูกค้าบุคคล_สินเชื่อ_สมัครสินเชื่อ"
                                            href="https://www.kasikornbank.com/th/apply/pages/apply_index.aspx#loanpersonal"
                                            target="_self"
                                        >
                                            สมัครสินเชื่อ
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ลูกค้าบุคคล ลงทุน */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "invest" &&
                                menu == "personal"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="personal"
                            data-id="invest"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <div className={styles.txt}>เลือกการลงทุน</div>
                                        <ul className={styles.listTxt}>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_ลงทุน_กองทุนรวม"
                                                    href="https://www.kasikornasset.com/th/pages/index.aspx?utm_source=web_own&amp;utm_medium=direct_mass&amp;utm_term=kbank"
                                                    target="_self"
                                                >
                                                    กองทุนรวม
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_ลงทุน_หุ้น"
                                                    href="https://www.kasikornbank.com/th/personal/invest/pages/stock.aspx"
                                                    target="_self"
                                                >
                                                    หุ้น
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_ลงทุน_หุ้นกู้ / พันธบัตร"
                                                    href="https://www.kasikornbank.com/th/personal/invest/pages/bond.aspx"
                                                    target="_self"
                                                >
                                                    หุ้นกู้ / พันธบัตร
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_ลงทุน_ตราสารอนุพันธ์ / สัญญาซื้อขายล่วงหน้า"
                                                    href="https://www.kasikornbank.com/th/personal/invest/pages/future.aspx"
                                                    target="_self"
                                                >
                                                    ตราสารอนุพันธ์ / สัญญาซื้อขายล่วงหน้า
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_ลงทุน_ลงทุนผ่าน Wealth PLUS"
                                                    href="https://www.kasikornbank.com/th/personal/digital-banking/pages/wealth-plus.aspx"
                                                    target="_self"
                                                >
                                                    ลงทุนผ่าน Wealth PLUS
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_ลงทุน_จองซื้อหลักทรัพย์ผ่าน K-My Invest"
                                                    href="https://www.kasikornbank.com/th/kmyinvest/pages/landingrdsx.aspx"
                                                    target="_self"
                                                >
                                                    จองซื้อหลักทรัพย์ผ่าน K-My Invest
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ลูกค้าบุคคล ประกัน */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "insurance" &&
                                menu == "personal"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="personal"
                            data-id="insurance"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <a
                                            className={`${styles.txt} personal_product_nav_header`}
                                            title="ลูกค้าบุคคล_ประกัน_หน้าหลักประกัน"
                                            href="https://www.kasikornbank.com/th/personal/pages/insurance.aspx"
                                            target="_self"
                                        >
                                            หน้าหลักประกัน <span className={styles.icArrow}></span>
                                        </a>
                                        <ul className={styles.listTxt}>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_ประกัน_ประกันสุขภาพ"
                                                    href="https://www.kasikornbank.com/th/personal/pages/insurance.aspx#life"
                                                    target="_self"
                                                >
                                                    ประกันสุขภาพ
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_ประกัน_ประกันอุบัติเหตุ และการเดินทาง"
                                                    href="https://www.kasikornbank.com/th/personal/pages/insurance.aspx#travel"
                                                    target="_self"
                                                >
                                                    ประกันอุบัติเหตุ และการเดินทาง
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_ประกัน_ประกันออม บำนาญ และลงทุน"
                                                    href="https://www.kasikornbank.com/th/personal/pages/insurance.aspx#invest"
                                                    target="_self"
                                                >
                                                    ประกันออม บำนาญ และลงทุน
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_ประกัน_ประกันเพื่อมรดก"
                                                    href="https://www.kasikornbank.com/th/personal/pages/insurance.aspx#retire"
                                                    target="_self"
                                                >
                                                    ประกันเพื่อมรดก
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_ประกัน_ประกันภาระหนี้ / สินเชื่อ"
                                                    href="https://www.kasikornbank.com/th/personal/pages/insurance.aspx#loan"
                                                    target="_self"
                                                >
                                                    ประกันภาระหนี้ / สินเชื่อ
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_ประกัน_ประกันทรัพย์สิน"
                                                    href="https://www.kasikornbank.com/th/personal/pages/insurance.aspx#non-life"
                                                    target="_self"
                                                >
                                                    ประกันทรัพย์สิน
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ลูกค้าบุคคล ดิจิทัลแบงก์กิ้ง */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "digital" &&
                                menu == "personal"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="personal"
                            data-id="digital"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <div className={styles.rowFlex}>
                                            <div className={styles.col4}>
                                                <div className={styles.txt}>เลือกแอปพลิเคชัน</div>
                                                <ul className={styles.listTxt}>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_ดิจิทัลแบงก์กิ้ง_K PLUS"
                                                            href="https://www.kasikornbank.com/th/personal/digital-banking/kplus/pages/index.aspx"
                                                            target="_self"
                                                        >
                                                            K PLUS
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_ดิจิทัลแบงก์กิ้ง_K SHOP"
                                                            href="https://www.kasikornbank.com/th/business/sme/digital-banking/kshop/pages/index.aspx"
                                                            target="_self"
                                                        >
                                                            K SHOP
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_ดิจิทัลแบงก์กิ้ง_K BIZ"
                                                            href="https://www.kasikornbank.com/th/kbiz/pages/index.aspx"
                                                            target="_self"
                                                        >
                                                            K BIZ
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={styles.col4}>
                                                <div className={styles.txt}>เลือก e-Wallet</div>
                                                <ul className={styles.listTxt}>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_ดิจิทัลแบงก์กิ้ง_YouTrip"
                                                            href="https://www.kasikornbank.com/th/personal/digital-banking/e-wallet/pages/youtrip.aspx"
                                                            target="_self"
                                                        >
                                                            YouTrip
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_ดิจิทัลแบงก์กิ้ง_PTT Blue CONNECT"
                                                            href="https://www.kasikornbank.com/th/personal/digital-banking/pages/blue-connect.aspx"
                                                            target="_self"
                                                        >
                                                            PTT Blue CONNECT
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={styles.col4}>
                                                <div className={styles.txt}>เลือกบริการอื่นๆ</div>
                                                <ul className={styles.listTxt}>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_ดิจิทัลแบงก์กิ้ง_ลงทุนผ่าน Wealth PLUS"
                                                            href="https://www.kasikornbank.com/th/personal/digital-banking/pages/wealth-plus.aspx"
                                                            target="_self"
                                                        >
                                                            ลงทุนผ่าน Wealth PLUS
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_ดิจิทัลแบงก์กิ้ง_จองซื้อหลักทรัพย์ผ่าน K-My Invest"
                                                            href="https://www.kasikornbank.com/th/kmyinvest/pages/landingrdsx.aspx"
                                                            target="_self"
                                                        >
                                                            จองซื้อหลักทรัพย์ผ่าน K-My Invest
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_ดิจิทัลแบงก์กิ้ง_บริการเรียกเก็บเงินผ่าน LINE (ขุนทอง)"
                                                            href="https://www.kasikornbank.com/th/personal/digital-banking/pages/khun-thong.aspx"
                                                            target="_self"
                                                        >
                                                            บริการเรียกเก็บเงินผ่าน LINE (ขุนทอง)
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_ดิจิทัลแบงก์กิ้ง_บริการรับชำระเงินผ่าน Meta Pay"
                                                            href="https://www.kasikornbank.com/th/personal/digital-banking/pages/meta-pay.aspx"
                                                            target="_self"
                                                        >
                                                            บริการรับชำระเงินผ่าน Meta Pay
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_ดิจิทัลแบงก์กิ้ง_ระบบบริจาคอิเล็กทรอนิกส์ e-Donation"
                                                            href="https://www.kasikornbank.com/th/promotion/pages/e-donation.aspx"
                                                            target="_self"
                                                        >
                                                            ระบบบริจาคอิเล็กทรอนิกส์ e-Donation
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.colAuto}>
                                <div className={styles.inner}>
                                    <div className={styles.action}>
                                        <a
                                            className={`${styles.btn} personal_product_nav_header`}
                                            title="ลูกค้าบุคคล_ดิจิทัลแบงก์กิ้ง_สมัครดิจิทัลแบงก์กิ้ง"
                                            href="https://www.kasikornbank.com/th/apply/pages/apply_index.aspx#digitalbanking"
                                            target="_self"
                                        >
                                            สมัครดิจิทัลแบงก์กิ้ง
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ลูกค้าบุคคล โอนเงิน / ชำระเงิน */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "payment" &&
                                menu == "personal"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="personal"
                            data-id="payment"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <a
                                            className={`${styles.txt} personal_product_nav_header`}
                                            title="ลูกค้าบุคคล_โอนเงิน / ชำระเงิน_หน้าหลักโอนเงิน / ชำระเงิน"
                                            href="https://www.kasikornbank.com/th/personal/pages/paymentandtransfer.aspx"
                                            target="_self"
                                        >
                                            หน้าหลักโอนเงิน / ชำระเงิน{" "}
                                            <span className={styles.icArrow}></span>
                                        </a>
                                        <ul className={styles.listTxt}>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_โอนเงิน / ชำระเงิน_ชำระค่าสินค้าและบริการ"
                                                    href="https://www.kasikornbank.com/th/personal/pages/paymentandtransfer.aspx#bill-payment"
                                                    target="_self"
                                                >
                                                    ชำระค่าสินค้าและบริการ
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_โอนเงิน / ชำระเงิน_โอนเงินในประเทศ"
                                                    href="https://www.kasikornbank.com/th/personal/pages/paymentandtransfer.aspx#money-transfer"
                                                    target="_self"
                                                >
                                                    โอนเงินในประเทศ
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_โอนเงิน / ชำระเงิน_โอนเงินระหว่างประเทศ"
                                                    href="https://www.kasikornbank.com/th/personal/pages/paymentandtransfer.aspx#global-money-transfer"
                                                    target="_self"
                                                >
                                                    โอนเงินระหว่างประเทศ
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_โอนเงิน / ชำระเงิน_พร้อมเพย์"
                                                    href="https://www.kasikornbank.com/special/promptpay/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    พร้อมเพย์
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ลูกค้าบุคคล บริการ */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "service" &&
                                menu == "personal"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="personal"
                            data-id="service"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <div className={styles.rowFlex}>
                                            <div className={styles.col3}>
                                                <div className={styles.txt}>
                                                    เลือกบริการด้านการเงิน
                                                </div>
                                                <ul className={styles.listTxt}>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_บริการ_เงินตราต่างประเทศ"
                                                            href="https://www.kasikornbank.com/th/personal/services/foreign-currency/pages/default.aspx"
                                                            target="_self"
                                                        >
                                                            เงินตราต่างประเทศ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_บริการ_อัตราแลกเปลี่ยนเงินตราต่างประเทศ"
                                                            href="https://www.kasikornbank.com/th/rate/pages/foreign-exchange.aspx"
                                                            target="_self"
                                                        >
                                                            อัตราแลกเปลี่ยนเงินตราต่างประเทศ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_บริการ_สำนักงานแลกเปลี่ยนเงินตราต่างประเทศ"
                                                            href="https://www.kasikornbank.com/th/branch/pages/index.aspx?option=4"
                                                            target="_self"
                                                        >
                                                            สำนักงานแลกเปลี่ยนเงินตราต่างประเทศ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_บริการ_เช็คและดราฟต์"
                                                            href="https://www.kasikornbank.com/th/personal/services/cheque/pages/default.aspx"
                                                            target="_self"
                                                        >
                                                            เช็คและดราฟต์
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={styles.col3}>
                                                <div className={styles.txt}>
                                                    เลือกบริการแจ้งความเคลื่อนไหว
                                                </div>
                                                <ul className={styles.listTxt}>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_บริการ_บริการรับแจ้งเตือนผ่าน LINE KBank Live"
                                                            href="https://www.kasikornbank.com/th/personal/services/kbanklive-line/pages/index.aspx"
                                                            target="_self"
                                                        >
                                                            บริการรับแจ้งเตือนผ่าน LINE KBank Live
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_บริการ_บริการรับข้อมูลทาง SMS"
                                                            href="https://www.kasikornbank.com/th/personal/digital-banking/sms/pages/default.aspx"
                                                            target="_self"
                                                        >
                                                            บริการรับข้อมูลทาง SMS
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_บริการ_บริการ K-eMail Statement"
                                                            href="https://www.kasikornbank.com/th/personal/digital-banking/statement/pages/default.aspx"
                                                            target="_self"
                                                        >
                                                            บริการ K-eMail Statement
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={styles.col3}>
                                                <div className={styles.txt}>เลือกบริการอื่น ๆ</div>
                                                <ul className={styles.listTxt}>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_บริการ_บริการ NDID"
                                                            href="https://www.kasikornbank.com/th/personal/account/pages/ndid.aspx"
                                                            target="_self"
                                                        >
                                                            บริการ NDID
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_บริการ_K CHECK ID บริการยืนยันตัวตน"
                                                            href="https://www.kasikornbank.com/special/pages/k-check-id.aspx"
                                                            target="_self"
                                                        >
                                                            K CHECK ID บริการยืนยันตัวตน
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_บริการ_บริการเคแบงก์เซอร์วิส"
                                                            href="https://www.kasikornbank.com/th/personal/services/kbankservice/pages/kbankservice.aspx"
                                                            target="_self"
                                                        >
                                                            บริการเคแบงก์เซอร์วิส
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_บริการ_บริการขอข้อมูลภาษีหัก ณ ที่จ่ายดอกเบี้ยเงินฝาก (e-WHT)"
                                                            href="https://www.kasikornbank.com/th/business/sme/financial-services/ecertificate/pages/e-withholding-tax.aspx"
                                                            target="_self"
                                                        >
                                                            บริการขอข้อมูลภาษีหัก ณ ที่จ่ายดอกเบี้ยเงินฝาก
                                                            (e-WHT)
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_บริการ_รายการเดินบัญชีเงินฝาก"
                                                            href="https://www.kasikornbank.com/th/personal/services/statement/pages/index.aspx"
                                                            target="_self"
                                                        >
                                                            รายการเดินบัญชีเงินฝาก
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_บริการ_บริการสำหรับฟรีแลนซ์ (Freelance)"
                                                            href="https://www.kasikornbank.com/th/personal/services/pages/freelance-solution.aspx"
                                                            target="_self"
                                                        >
                                                            บริการสำหรับฟรีแลนซ์ (Freelance)
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_บริการ_บริการชำระผ่าน QR Code"
                                                            href="https://www.kasikornbank.com/th/kplus/instruction/qrbarcode"
                                                            target="_self"
                                                        >
                                                            บริการชำระผ่าน QR Code
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="personal_product_nav_header"
                                                            title="ลูกค้าบุคคล_บริการ_UnionPay QR code ผ่าน K PLUS"
                                                            href="https://www.kasikornbank.com/th/personal/digital-banking/pages/kplus-qrunionpay.aspx"
                                                            target="_self"
                                                        >
                                                            UnionPay QR code ผ่าน K PLUS
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ลูกค้าบุคคล โปรโมชัน */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "promotion" &&
                                menu == "personal"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="personal"
                            data-id="promotion"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <div className={styles.txt}>เลือกโปรโมชัน</div>
                                        <ul className={styles.listTxt}>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_โปรโมชัน_โปรโมชัน / สิทธิพิเศษ"
                                                    href="https://www.kasikornbank.com/th/promotion/pages/promotion.aspx"
                                                    target="_self"
                                                >
                                                    โปรโมชัน / สิทธิพิเศษ
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_โปรโมชัน_โปรโมชันบัตรเดบิต"
                                                    href="https://www.kasikornbank.com/th/personal/debitcard/pages/debit-card-privilege.aspx"
                                                    target="_self"
                                                >
                                                    โปรโมชันบัตรเดบิต
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_โปรโมชัน_โปรโมชันบัตรเครดิต"
                                                    href="https://www.kasikornbank.com/th/promotion/credit-card/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    โปรโมชันบัตรเครดิต
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_โปรโมชัน_โปรโมชันบัตรเงินด่วน"
                                                    href="https://www.kasikornbank.com/th/promotion/credit-card/pages/index_cash.aspx"
                                                    target="_self"
                                                >
                                                    โปรโมชันบัตรเงินด่วน
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ลูกค้าบุคคล บทความ */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "blog" && menu == "personal"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="personal"
                            data-id="blog"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <div className={styles.txt}>เลือกประเภทบทความ</div>
                                        <ul className={styles.listTxt}>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_K CONTENT_บทความ K WEALTH"
                                                    href="https://www.kasikornbank.com/th/kwealth/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    บทความ K WEALTH
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_K CONTENT_ช่วยเรื่องกู้...รู้จริง"
                                                    href="https://www.kasikornbank.com/th/credit-insight/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    ช่วยเรื่องกู้...รู้จริง
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_K CONTENT_บทความบ้าน"
                                                    href="https://www.kasikornbank.com/th/personal/loan/home-loan/article/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    บทความบ้าน
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_K CONTENT_บทความรถ"
                                                    href="https://www.kasikornbank.com/th/personal/loan/car-loan/article/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    บทความรถ
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_K CONTENT_บทความทรัพย์มือสอง"
                                                    href="https://www.kasikornbank.com/th/PropertyForSale/article/Pages/index.aspx"
                                                    target="_self"
                                                >
                                                    บทความทรัพย์มือสอง
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_K CONTENT_บทความประกัน"
                                                    href="https://www.kasikornbank.com/th/personal/insure/article/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    บทความประกัน
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_K CONTENT_รอบรู้ธุรกิจ"
                                                    href="https://www.kasikornbank.com/th/business/sme/ksmeknowledge/article/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    รอบรู้ธุรกิจ
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_K CONTENT_ครบเรื่องธุรกรรมการเงิน รู้จริงทุกธุรกิจ"
                                                    href="https://www.kasikornbank.com/th/kbiz/article/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    ครบเรื่องธุรกรรมการเงิน รู้จริงทุกธุรกิจ
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="personal_product_nav_header"
                                                    title="ลูกค้าบุคคล_K CONTENT_ก้าวทันภัยไซเบอร์"
                                                    href="https://www.kasikornbank.com/th/personal/digital-banking/kbankcyberrisk/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    ก้าวทันภัยไซเบอร์
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ลูกค้าธุรกิจ สินเชื่อ */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "loan" && menu == "business"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="business"
                            data-id="loan"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <div className={styles.rowFlex}>
                                            <div className={styles.col4}>
                                                <div className={styles.txt}>เลือกประเภทสินเชื่อ</div>
                                                <ul className={styles.listTxt}>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_สินเชื่อ_สินเชื่อเพื่อหมุนเวียนในธุรกิจ"
                                                            href="https://www.kasikornbank.com/th/business/pages/working-capital.aspx"
                                                            target="_self"
                                                        >
                                                            สินเชื่อเพื่อหมุนเวียนในธุรกิจ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_สินเชื่อ_สินเชื่อเพื่อการลงทุนในธุรกิจ"
                                                            href="https://www.kasikornbank.com/th/business/pages/commercial-loan.aspx"
                                                            target="_self"
                                                        >
                                                            สินเชื่อเพื่อการลงทุนในธุรกิจ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_สินเชื่อ_หนังสือค้ำประกัน"
                                                            href="https://www.kasikornbank.com/th/business/sme/loan/credit-guarantee"
                                                            target="_self"
                                                        >
                                                            หนังสือค้ำประกัน
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_สินเชื่อ_อาวัลตั๋วสัญญาใช้เงิน / รับรองและจ่ายเงินตามตั๋วแลกเงิน"
                                                            href="https://www.kasikornbank.com/th/business/loan/credit-guarantee/pages/kaval-kacceptance.aspx"
                                                            target="_self"
                                                        >
                                                            อาวัลตั๋วสัญญาใช้เงิน /
                                                            รับรองและจ่ายเงินตามตั๋วแลกเงิน
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={styles.col4}>
                                                <div className={styles.txt}>
                                                    เลือกสินเชื่อเพื่อการค้าระหว่างประเทศ
                                                </div>
                                                <ul className={styles.listTxt}>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_สินเชื่อ_สินเชื่อเพื่อการค้าระหว่างประเทศ"
                                                            href="https://www.kasikornbank.com/th/international-business/loan/pages/default.aspx"
                                                            target="_self"
                                                        >
                                                            สินเชื่อเพื่อการค้าระหว่างประเทศ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_สินเชื่อ_หนังสือค้ำประกันระหว่างประเทศ"
                                                            href="https://www.kasikornbank.com/th/business/international-trade/credit-guarantee"
                                                            target="_self"
                                                        >
                                                            หนังสือค้ำประกันระหว่างประเทศ
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={styles.col4}>
                                                <div className={styles.txt}>สินเชื่อแนะนำ</div>
                                                <ul className={styles.listTxt}>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_สินเชื่อ_รวมสินเชื่อ KBank ช่วยได้เมื่อช็อต"
                                                            href="https://www.kasikornbank.com/th/personal/loan/personalloan/pages/all-loan.aspx"
                                                            target="_self"
                                                        >
                                                            รวมสินเชื่อ KBank ช่วยได้เมื่อช็อต
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_สินเชื่อ_รวมสินเชื่อ GO GREEN"
                                                            href="https://www.kasikornbank.com/th/personal/loan/homeloan/pages/green-solution.aspx"
                                                            target="_self"
                                                        >
                                                            รวมสินเชื่อ GO GREEN
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.colAuto}>
                                <div className={styles.inner}>
                                    <div className={styles.action}>
                                        <a
                                            className={`${styles.btn} business_product_nav_header`}
                                            title="ลูกค้าธุรกิจ_สินเชื่อ_สมัครสินเชื่อ SME"
                                            href="https://www.kasikornbank.com/th/apply/pages/apply_index.aspx#commercial"
                                            target="_self"
                                        >
                                            สมัครสินเชื่อ SME
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ลูกค้าธุรกิจ บริการชำระ / รับชำระเงิน */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "paybill" &&
                                menu == "business"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="business"
                            data-id="paybill"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <div className={styles.txt}>เลือกบริการ</div>
                                        <ul className={styles.listTxt}>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_บริการชำระ / รับชำระเงิน_บริการชำระเงิน"
                                                    href="https://www.kasikornbank.com/th/business/sme/financial-services/money-transfer/pages/default.aspx"
                                                    target="_self"
                                                >
                                                    บริการชำระเงิน
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_บริการชำระ / รับชำระเงิน_บริการรับชำระเงิน"
                                                    href="https://www.kasikornbank.com/th/business/sme/financial-services/collection-solutions/pages/default.aspx"
                                                    target="_self"
                                                >
                                                    บริการรับชำระเงิน
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_บริการชำระ / รับชำระเงิน_บริหารสภาพคล่อง"
                                                    href="https://www.kasikornbank.com/th/business/cash-management/liquidity-solutions"
                                                    target="_self"
                                                >
                                                    บริหารสภาพคล่อง
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_บริการชำระ / รับชำระเงิน_โซลูชันเพื่อร้านค้าออนไลน์ (Online Merchant Solutions)"
                                                    href="https://www.kasikornbank.com/th/business/sme/digital-banking/online-merchant-solutions/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    โซลูชันเพื่อร้านค้าออนไลน์ (Online Merchant
                                                    Solutions)
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_บริการชำระ / รับชำระเงิน_โซลูชันเพื่อร้านอาหาร (Restaurant Solutions)"
                                                    href="https://www.kasikornbank.com/th/business/sme/digital-banking/payment-for-restaurant/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    โซลูชันเพื่อร้านอาหาร (Restaurant Solutions)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ลูกค้าธุรกิจ ดิจิทัลแบงก์กิ้ง */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "digital" &&
                                menu == "business"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="business"
                            data-id="digital"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <div className={styles.rowFlex}>
                                            <div className={styles.col4}>
                                                <div className={styles.txt}>เลือกบริการ</div>
                                                <ul className={styles.listTxt}>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ดิจิทัลแบงก์กิ้ง_K BIZ"
                                                            href="https://www.kasikornbank.com/th/kbiz/pages/index.aspx"
                                                            target="_self"
                                                        >
                                                            K BIZ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ดิจิทัลแบงก์กิ้ง_K PLUS SME"
                                                            href="https://www.kasikornbank.com/th/business/sme/digital-banking/pages/kplus_sme.aspx"
                                                            target="_self"
                                                        >
                                                            K PLUS SME
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ดิจิทัลแบงก์กิ้ง_K SHOP"
                                                            href="https://www.kasikornbank.com/th/business/sme/digital-banking/kplusshop/pages/index.aspx"
                                                            target="_self"
                                                        >
                                                            K SHOP
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ดิจิทัลแบงก์กิ้ง_K CORPORATE CONNECT"
                                                            href="https://www.kasikornbank.com/th/business/digital-banking/pages/k-corporate-connect.aspx"
                                                            target="_self"
                                                        >
                                                            K CORPORATE CONNECT
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={styles.col4}>
                                                <div className={styles.txt}>เลือกบริการอื่นๆ</div>
                                                <ul className={styles.listTxt}>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ดิจิทัลแบงก์กิ้ง_บริการโอนเงินออกไปต่างประเทศทางอิเล็กทรอนิกส์"
                                                            href="https://www.kasikornbank.com/th/business/international-trade/electronic-trade/pages/epa.aspx"
                                                            target="_self"
                                                        >
                                                            บริการโอนเงินออกไปต่างประเทศทางอิเล็กทรอนิกส์
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ดิจิทัลแบงก์กิ้ง_e-Tax Invoice &amp; e-Receipt"
                                                            href="https://www.kasikornbank.com/th/business/cash-management/e-service-payment/pages/etax-invoice_ereceipt.aspx"
                                                            target="_self"
                                                        >
                                                            e-Tax Invoice &amp; e-Receipt
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ดิจิทัลแบงก์กิ้ง_บริการชำระผ่าน QR API"
                                                            href="https://www.kasikornbank.com/th/business/sme/financial-services/pages/qr-api.aspx"
                                                            target="_self"
                                                        >
                                                            บริการชำระผ่าน QR API
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ดิจิทัลแบงก์กิ้ง_K-Agent &amp; Securities Service"
                                                            href="https://www.kasikornbank.com/th/business/digital-banking/pages/k-agent-securities.aspx"
                                                            target="_self"
                                                        >
                                                            K-Agent &amp; Securities Service
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ดิจิทัลแบงก์กิ้ง_KBank Fleet Card Online Service"
                                                            href="https://kbankfleetcard.kasikornbank.com/fcWeb/security/login.aspx"
                                                            target="_self"
                                                        >
                                                            KBank Fleet Card Online Service
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.colAuto}>
                                <div className={styles.inner}>
                                    <div className={styles.action}>
                                        <a
                                            className={`${styles.btn} business_product_nav_header`}
                                            title="ลูกค้าธุรกิจ_ดิจิทัลแบงก์กิ้ง_สมัครดิจิทัลแบงก์กิ้ง"
                                            href="https://www.kasikornbank.com/th/apply/pages/apply_index.aspx#digitalbanking"
                                            target="_self"
                                        >
                                            สมัครดิจิทัลแบงก์กิ้ง
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ลูกค้าธุรกิจ ระหว่างประเทศ */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "international" &&
                                menu == "business"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="business"
                            data-id="international"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <div className={styles.rowFlex}>
                                            <div className={styles.col3}>
                                                <div className={styles.txt}>เลือกบริการ</div>
                                                <ul className={styles.listTxt}>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ระหว่างประเทศ_บริการด้านการนำเข้า"
                                                            href="https://www.kasikornbank.com/th/business/sme/international-trade/import/pages/default.aspx"
                                                            target="_self"
                                                        >
                                                            บริการด้านการนำเข้า
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ระหว่างประเทศ_บริการด้านการส่งออก"
                                                            href="https://www.kasikornbank.com/th/business/sme/international-trade/export/pages/default.aspx"
                                                            target="_self"
                                                        >
                                                            บริการด้านการส่งออก
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ระหว่างประเทศ_บริการโอนเงินระหว่างประเทศ"
                                                            href="https://www.kasikornbank.com/th/business/sme/international-trade/global-money-transfer/pages/default.aspx"
                                                            target="_self"
                                                        >
                                                            บริการโอนเงินระหว่างประเทศ
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={styles.col3}>
                                                <div className={styles.txt}>
                                                    เลือกเครือข่ายในต่างประเทศ
                                                </div>
                                                <ul className={styles.listTxt}>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ระหว่างประเทศ_Total Solution"
                                                            href="https://www.kasikornbank.com/th/international-business/pages/global.aspx"
                                                            target="_self"
                                                        >
                                                            Total Solution
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ระหว่างประเทศ_บริการให้คำปรึกษาในการลงทุน"
                                                            href="https://www.kasikornbank.com/international-business/th/pages/home.aspx"
                                                            target="_self"
                                                        >
                                                            บริการให้คำปรึกษาในการลงทุน
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ระหว่างประเทศ_บริการจับคู่ธุรกิจ"
                                                            href="https://www.kasikornbank.com/th/international-business/pages/business-matching.aspx"
                                                            target="_self"
                                                        >
                                                            บริการจับคู่ธุรกิจ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ระหว่างประเทศ_USA Patriot Act Certificate &amp; W-8BEN"
                                                            href="https://www.kasikornbank.com/th/international-business/pages/us-patriot.aspx"
                                                            target="_self"
                                                        >
                                                            USA Patriot Act Certificate &amp; W-8BEN
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ระหว่างประเทศ_เครื่อข่ายในต่างประเทศ"
                                                            href="https://www.kasikornbank.com/th/branch/pages/overseas-branch2.aspx"
                                                            target="_self"
                                                        >
                                                            เครื่อข่ายในต่างประเทศ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ระหว่างประเทศ_เครือข่ายในต่างประเทศ (AEC+3)"
                                                            href="https://www.kasikornbank.com/th/international-business/pages/aec-branch.aspx"
                                                            target="_self"
                                                        >
                                                            เครือข่ายในต่างประเทศ (AEC+3)
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ระหว่างประเทศ_เครือข่ายอื่นๆ ในต่างประเทศ"
                                                            href="https://www.kasikornbank.com/th/international-business/pages/global-branch.aspx"
                                                            target="_self"
                                                        >
                                                            เครือข่ายอื่นๆ ในต่างประเทศ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ระหว่างประเทศ_KBank Credential"
                                                            href="https://www.kasikornbank.com/th/international-business/pages/credential.aspx"
                                                            target="_self"
                                                        >
                                                            KBank Credential
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_ระหว่างประเทศ_Oversea Performance"
                                                            href="https://www.kasikornbank.com/en/international-business/overseaperformance/pages/hong-kong-branch.aspx"
                                                            target="_self"
                                                        >
                                                            Oversea Performance
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ลูกค้าธุรกิจ ลงทุน */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "invest" &&
                                menu == "business"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="business"
                            data-id="invest"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <div className={styles.txt}>เลือกการลงทุน</div>
                                        <ul className={styles.listTxt}>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_ลงทุน_วาณิชธนกิจ"
                                                    href="https://www.kasikornbank.com/th/business/investment-banking/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    วาณิชธนกิจ
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_ลงทุน_ธุรกิจหลักทรัพย์"
                                                    href="https://www.kasikornbank.com/th/business/securities/pages/securities.aspx"
                                                    target="_self"
                                                >
                                                    ธุรกิจหลักทรัพย์
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_ลงทุน_ตราสารหนี้ / ตั๋วเงิน"
                                                    href="https://www.kasikornbank.com/th/business/investments/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    ตราสารหนี้ / ตั๋วเงิน
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_ลงทุน_ลงทุนในทรัพย์มือสอง"
                                                    href="https://www.kasikornbank.com/th/PropertyForSale/Pages/home.aspx"
                                                    target="_self"
                                                >
                                                    ลงทุนในทรัพย์มือสอง
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ลูกค้าธุรกิจ บัญชี */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "account" &&
                                menu == "business"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="business"
                            data-id="account"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <a
                                            className={`${styles.txt} business_product_nav_header`}
                                            title="ลูกค้าธุรกิจ_บัญชี_หน้าหลักบัญชี"
                                            href="https://www.kasikornbank.com/th/business/sme/financial-services/account/Pages/default.aspx"
                                            target="_self"
                                        >
                                            หน้าหลักบัญชี <span className={styles.icArrow}></span>
                                        </a>
                                        <ul className={styles.listTxt}>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_บัญชี_บัญชีเงินฝากกระแสรายวัน"
                                                    href="https://www.kasikornbank.com/th/business/saving/pages/current.aspx"
                                                    target="_self"
                                                >
                                                    บัญชีเงินฝากกระแสรายวัน
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_บัญชี_บัญชีเงินฝากประจำ"
                                                    href="https://www.kasikornbank.com/th/business/saving/pages/fixed.aspx"
                                                    target="_self"
                                                >
                                                    บัญชีเงินฝากประจำ
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_บัญชี_บัญชีเงินฝากออมทรัพย์"
                                                    href="https://www.kasikornbank.com/th/business/saving/pages/savings.aspx"
                                                    target="_self"
                                                >
                                                    บัญชีเงินฝากออมทรัพย์
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_บัญชี_บัญชีเงินฝากออมทรัพย์ สำหรับนิติบุคคลพิเศษ"
                                                    href="https://www.kasikornbank.com/th/business/saving/pages/special-saving.aspx"
                                                    target="_self"
                                                >
                                                    บัญชีเงินฝากออมทรัพย์ สำหรับนิติบุคคลพิเศษ
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ลูกค้าธุรกิจ บัตรธุรกิจ */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "business-card" &&
                                menu == "business"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="business"
                            data-id="business-card"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <div className={styles.txt}>เลือกประเภทบัตร</div>
                                        <ul className={styles.listTxt}>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_บัตรธุรกิจ_บัตรเครดิต"
                                                    href="https://www.kasikornbank.com/th/business/sme/financial-services/credit-card/pages/default.aspx"
                                                    target="_self"
                                                >
                                                    บัตรเครดิต
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_บัตรธุรกิจ_บัตรสมาชิก THE SIERRA"
                                                    href="https://www.kasikornbank.com/kbankthesierra/Pages/index.aspx"
                                                    target="_self"
                                                >
                                                    บัตรสมาชิก THE SIERRA
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ลูกค้าธุรกิจ ประกัน */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "insurance" &&
                                menu == "business"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="business"
                            data-id="insurance"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <div className={styles.txt}>เลือกประเภทประกัน</div>
                                        <ul className={styles.listTxt}>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_ประกัน_ประกันชีวิต"
                                                    href="https://www.kasikornbank.com/th/business/sme/insure/life/pages/default.aspx"
                                                    target="_self"
                                                >
                                                    ประกันชีวิต
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_ประกัน_ประกันวินาศภัย"
                                                    href="https://www.kasikornbank.com/th/business/sme/insure/non-life/pages/default.aspx"
                                                    target="_self"
                                                >
                                                    ประกันวินาศภัย
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_ประกัน_ประกันกลุ่ม"
                                                    href="https://www.kasikornbank.com/th/business/sme/insure/perfect-employee-care/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    ประกันกลุ่ม
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ลูกค้าธุรกิจ บริการ */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "service" &&
                                menu == "business"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="business"
                            data-id="service"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <div className={styles.rowFlex}>
                                            <div className={styles.col3}>
                                                <div className={styles.txt}>เลือกบริการ</div>
                                                <ul className={styles.listTxt}>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_บริการ_บริการธุรกรรมทางอิเล็กทรอนิกส์"
                                                            href="https://www.kasikornbank.com/th/business/cash-management/e-service-payment/pages/e-service-payment.aspx"
                                                            target="_self"
                                                        >
                                                            บริการธุรกรรมทางอิเล็กทรอนิกส์
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_บริการ_บริหารความเสี่ยง"
                                                            href="https://www.kasikornbank.com/th/business/derivative-investments/pages/index.aspx"
                                                            target="_self"
                                                        >
                                                            บริหารความเสี่ยง
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_บริการ_บริการเรียกเก็บเงิน"
                                                            href="https://www.kasikornbank.com/th/business/cash-management/collection-solutions/pages/payment-solutions.aspx"
                                                            target="_self"
                                                        >
                                                            บริการเรียกเก็บเงิน
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_บริการ_พร้อมเพย์ธุรกิจ"
                                                            href="https://www.kasikornbank.com/th/business/sme/financial-services/promptpay/Pages/promptpay-for-business.aspx"
                                                            target="_self"
                                                        >
                                                            พร้อมเพย์ธุรกิจ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_บริการ_พร้อมบิซ"
                                                            href="https://www.kasikornbank.com/th/business/digital-banking/Pages/promptbiz.aspx"
                                                            target="_self"
                                                        >
                                                            พร้อมบิซ
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={styles.col3}>
                                                <div className={styles.txt}>เลือกบริการอื่นๆ</div>
                                                <ul className={styles.listTxt}>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_บริการ_หนังสือรับรองนิติบุคคลอิเล็กทรอนิกส์"
                                                            href="https://www.kasikornbank.com/th/business/sme/financial-services/ecertificate/pages/dbd.aspx"
                                                            target="_self"
                                                        >
                                                            หนังสือรับรองนิติบุคคลอิเล็กทรอนิกส์
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_บริการ_หนังสือยืนยันยอดธนาคารสำหรับผู้สอบบัญชี (Audit Confirmation Letter)"
                                                            href="https://www.kasikornbank.com/th/announcement/pages/auditconfirmation.aspx"
                                                            target="_self"
                                                        >
                                                            หนังสือยืนยันยอดธนาคารสำหรับผู้สอบบัญชี (Audit
                                                            Confirmation Letter)
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_บริการ_K-Value Chain Solutions"
                                                            href="https://www.kasikornbank.com/th/business/k-value-chain-solution"
                                                            target="_self"
                                                        >
                                                            K-Value Chain Solutions
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_บริการ_บริการชำระผ่าน QR API"
                                                            href="https://www.kasikornbank.com/th/business/sme/financial-services/pages/qr-api.aspx"
                                                            target="_self"
                                                        >
                                                            บริการชำระผ่าน QR API
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_บริการ_บริการขอข้อมูลภาษีหัก ณ ที่จ่ายดอกเบี้ยเงินฝาก (e-WHT)"
                                                            href="https://www.kasikornbank.com/th/business/sme/financial-services/ecertificate/pages/e-withholding-tax.aspx"
                                                            target="_self"
                                                        >
                                                            บริการขอข้อมูลภาษีหัก ณ ที่จ่ายดอกเบี้ยเงินฝาก
                                                            (e-WHT)
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_บริการ_รายการเดินบัญชีเงินฝาก (K-Deposit Statement)"
                                                            href="https://www.kasikornbank.com/th/news/pages/statement.aspx"
                                                            target="_self"
                                                        >
                                                            รายการเดินบัญชีเงินฝาก (K-Deposit Statement)
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="business_product_nav_header"
                                                            title="ลูกค้าธุรกิจ_บริการ_บริการลิงก์รับชำระเงินผ่าน LINE OA : K SOCIAL PAY"
                                                            href="https://www.kasikornbank.com/th/business/sme/financial-services/pages/k-social-pay.aspx"
                                                            target="_self"
                                                        >
                                                            บริการลิงก์รับชำระเงินผ่าน LINE OA : K SOCIAL
                                                            PAY
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ลูกค้าธุรกิจ บทความ */}
                        <div
                            className={`${styles.bottombarContent} ${subMenu == "blog" && menu == "business"
                                ? styles.active
                                : ""
                                }`}
                            data-tag="business"
                            data-id="blog"
                        >
                            <div className={styles.col}>
                                <div className={styles.inner}>
                                    <div className={styles.bottombarContentBody}>
                                        <div className={styles.txt}>เลือกประเภทบทความ</div>
                                        <ul className={styles.listTxt}>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_K CONTENT_บทความ K WEALTH"
                                                    href="https://www.kasikornbank.com/th/kwealth/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    บทความ K WEALTH
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_K CONTENT_ช่วยเรื่องกู้...รู้จริง"
                                                    href="https://www.kasikornbank.com/th/credit-insight/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    ช่วยเรื่องกู้...รู้จริง
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_K CONTENT_บทความบ้าน"
                                                    href="https://www.kasikornbank.com/th/personal/loan/home-loan/article/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    บทความบ้าน
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_K CONTENT_บทความรถ"
                                                    href="https://www.kasikornbank.com/th/personal/loan/car-loan/article/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    บทความรถ
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_K CONTENT_บทความทรัพย์มือสอง"
                                                    href="https://www.kasikornbank.com/th/PropertyForSale/article/Pages/index.aspx"
                                                    target="_self"
                                                >
                                                    บทความทรัพย์มือสอง
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_K CONTENT_บทความประกัน"
                                                    href="https://www.kasikornbank.com/th/personal/insure/article/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    บทความประกัน
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_K CONTENT_รอบรู้ธุรกิจ"
                                                    href="https://www.kasikornbank.com/th/business/sme/ksmeknowledge/article/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    รอบรู้ธุรกิจ
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_K CONTENT_ครบเรื่องธุรกรรมการเงิน รู้จริงทุกธุรกิจ"
                                                    href="https://www.kasikornbank.com/th/kbiz/article/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    ครบเรื่องธุรกรรมการเงิน รู้จริงทุกธุรกิจ
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="business_product_nav_header"
                                                    title="ลูกค้าธุรกิจ_K CONTENT_ก้าวทันภัยไซเบอร์"
                                                    href="https://www.kasikornbank.com/th/personal/digital-banking/kbankcyberrisk/pages/index.aspx"
                                                    target="_self"
                                                >
                                                    ก้าวทันภัยไซเบอร์
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------------------  End Desktop   ------------------------------- */}

            {/* -------------------------  Start Mobile   ------------------------------- */}
            <div className={`${styles.headerMobile} ${styles.visibleMobile}`}>
                <div className={styles.headerInner}>
                    <div className={styles.logoKbank}>
                        <a href="/th/personal" title="Logo Kbank">
                            <img
                                className={styles.logo1}
                                src="/next.svg"
                                alt="Logo Kbank"
                            />
                            <img
                                className={styles.logo2}
                                src="/next.svg"
                                alt="Logo Kbank"
                            />
                        </a>
                    </div>
                    <div
                        className={`${styles.headerRight} ${styles.aCenter} ${styles.actionLogin}`}
                    >
                        <div
                            id="menubar"
                            className={`${styles.menuBtn} ${styles.mnuBtn} ${styles.mnuToggle
                                } ${mnuToggle ? styles.active : ""}`}
                            onClick={() => {
                                if (!mnuToggle) {
                                    document.body.classList.add("panel-open");
                                } else {
                                    document.body.classList.remove("panel-open");
                                }
                                setMnuToggle(!mnuToggle)
                            }}
                        >
                            <span className={`${styles.icwBar} ${styles.barTop}`}></span>
                            <span className={`${styles.icwBar} ${styles.barMiddle}`}></span>
                            <span className={`${styles.icwBar} ${styles.barBottom}`}></span>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`${styles.panelNav} ${styles.visibleMobile} ${"" // styles.overlay
                    } ${mnuToggle ? styles.forceMobileHeader : ""}`}
            >
                <div className={styles.panelSwitch}>
                    <div className={styles.panelBodyInner}>
                        <div className={styles.panelMenuProduct}>
                            <div
                                className={`${styles.panelMenuList} main_nav_header ${menuMobile == "personal" ? styles.active : ""
                                    }`}
                                onClick={() => {
                                    setMenuMobile(menuMobile == "personal" ? "" : "personal");
                                    setFooterMenuMobile("personal");
                                }}
                                title="ลูกค้าบุคคล"
                                data-tag="personal"
                            >
                                ลูกค้าบุคคล
                            </div>
                            <div
                                className={styles.panelMenuListLv2}
                            // style="display: none;"
                            >
                                <ul className={styles.menuListLv2}>
                                    <li>
                                        <a
                                            href="https://www.kasikornbank.com/th/personal"
                                            target="_self"
                                            className="link personal_product_nav_header"
                                            title="ลูกค้าบุคคล_หน้าหลัก"
                                        >
                                            หน้าหลัก
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_บัญชี"
                                            data-tag="personal"
                                            data-id="account"
                                        >
                                            บัญชี
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_บัตร"
                                            data-tag="personal"
                                            data-id="card"
                                        >
                                            บัตร
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_สินเชื่อ"
                                            data-tag="personal"
                                            data-id="loan"
                                        >
                                            สินเชื่อ
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_ลงทุน"
                                            data-tag="personal"
                                            data-id="invest"
                                        >
                                            ลงทุน
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_ประกัน"
                                            data-tag="personal"
                                            data-id="insurance"
                                        >
                                            ประกัน
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_ดิจิทัลแบงก์กิ้ง"
                                            data-tag="personal"
                                            data-id="digital"
                                        >
                                            ดิจิทัลแบงก์กิ้ง
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_โอนเงิน / ชำระเงิน"
                                            data-tag="personal"
                                            data-id="payment"
                                        >
                                            โอนเงิน / ชำระเงิน
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_บริการ"
                                            data-tag="personal"
                                            data-id="service"
                                        >
                                            บริการ
                                        </a>
                                    </li>
                                </ul>
                                <hr className={styles.lineMenu} />
                                <ul className="menu-list-lv2">
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_โปรโมชัน"
                                            data-tag="personal"
                                            data-id="promotion"
                                        >
                                            โปรโมชัน
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to personal_product_nav_header"
                                            title="ลูกค้าบุคคล_บทความ"
                                            data-tag="personal"
                                            data-id="blog"
                                        >
                                            บทความ
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.panelMenuProduct}>
                            <div
                                className={`${styles.panelMenuList} main_nav_header ${menuMobile == "business" ? styles.active : ""
                                    }`}
                                onClick={() => {
                                    setMenuMobile(menuMobile == "business" ? "" : "business");
                                    setFooterMenuMobile("business");
                                }}
                                title="ลูกค้าธุรกิจ"
                                data-tag="business"
                            >
                                ลูกค้าธุรกิจ
                            </div>
                            <div className={styles.panelMenuListLv2}>
                                <ul className={styles.menuListLv2}>
                                    <li>
                                        <a
                                            href="https://www.kasikornbank.com/th/business"
                                            target="_self"
                                            className="link business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_หน้าหลัก"
                                        >
                                            หน้าหลัก
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_สินเชื่อ"
                                            data-tag="business"
                                            data-id="loan"
                                        >
                                            สินเชื่อ
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_บริการชำระ / รับชำระเงิน"
                                            data-tag="business"
                                            data-id="paybill"
                                        >
                                            บริการชำระ / รับชำระเงิน
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_ดิจิทัลแบงก์กิ้ง"
                                            data-tag="business"
                                            data-id="digital"
                                        >
                                            ดิจิทัลแบงก์กิ้ง
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_ระหว่างประเทศ"
                                            data-tag="business"
                                            data-id="international"
                                        >
                                            ระหว่างประเทศ
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_ลงทุน"
                                            data-tag="business"
                                            data-id="invest"
                                        >
                                            ลงทุน
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_บัญชี"
                                            data-tag="business"
                                            data-id="account"
                                        >
                                            บัญชี
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_บัตรธุรกิจ"
                                            data-tag="business"
                                            data-id="business-card"
                                        >
                                            บัตรธุรกิจ
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_ประกัน"
                                            data-tag="business"
                                            data-id="insurance"
                                        >
                                            ประกัน
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_บริการ"
                                            data-tag="business"
                                            data-id="service"
                                        >
                                            บริการ
                                        </a>
                                    </li>
                                </ul>
                                <hr className={styles.lineMenu} />
                                <ul className="menu-list-lv2">
                                    <li>
                                        <a
                                            href="javascript:void(0);"
                                            target="_self"
                                            className="link-to business_product_nav_header"
                                            title="ลูกค้าธุรกิจ_บทความ"
                                            data-tag="business"
                                            data-id="blog"
                                        >
                                            บทความ
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.panelMenuProduct}>
                            <div
                                className={`${styles.panelMenuList} main_nav_header ${menuMobile == "wealth" ? styles.active : ""
                                    }`}
                                onClick={() => {
                                    setMenuMobile(menuMobile == "wealth" ? "" : "wealth");
                                    setFooterMenuMobile("wealth");
                                }}
                                title="ลูกค้า Wealth"
                                data-tag="wealth"
                            >
                                ลูกค้า Wealth
                            </div>
                            <div className={styles.panelMenuListLv2}>
                                <ul className={styles.menuListLv2}>
                                    <li>
                                        <a
                                            href="https://www.kasikornbank.com/th/personal/privatebanking/pages/default.aspx"
                                            target="_self"
                                            className="link wealth_product_nav_header"
                                            title="ลูกค้า_Wealth_KBank_Private_Banking"
                                        >
                                            KBank Private Banking
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.kasikornbank.com/th/personal/the-wisdom"
                                            target="_self"
                                            className="link wealth_product_nav_header"
                                            title="ลูกค้า_Wealth_THE_WISDOM"
                                        >
                                            THE WISDOM
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.kasikornbank.com/th/personal/the-premier"
                                            target="_self"
                                            className="link wealth_product_nav_header"
                                            title="ลูกค้า_Wealth_THE_PREMIER"
                                        >
                                            THE PREMIER
                                        </a>
                                    </li>
                                </ul>
                                <hr className={styles.lineMenu} />
                                <ul className="menu-list-lv2">
                                    <li>
                                        <a
                                            href="https://www.kasikornbank.com/th/kwealth/pages/index.aspx"
                                            target="_self"
                                            className="link wealth_product_nav_header"
                                            title="ลูกค้า_Wealth_บทความ K WEALTH"
                                        >
                                            บทความ K WEALTH
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.panelFooterInner}>
                        <div className={styles.panelFooterProductList}>
                            {/* panelFooterProductList personal */}
                            <div
                                className={`${styles.panelFooterProduct} ${footerMenuMobile == "personal" ? styles.active : ""}`}
                                data-tag="personal"
                            >
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} investor_nav_header`}
                                        title="ลูกค้าบุคคล_นักลงทุนสัมพันธ์"
                                        data-tag="footer"
                                        data-id="personal_investor"
                                        role="button"
                                    >
                                        นักลงทุนสัมพันธ์
                                    </a>
                                </div>
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} personal_nav_header`}
                                        title="ลูกค้าบุคคล_เกี่ยวกับเรา"
                                        data-tag="footer"
                                        data-id="personal_aboutus"
                                        role="button"
                                    >
                                        เกี่ยวกับเรา
                                    </a>
                                </div>
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} personal_nav_header`}
                                        title="ลูกค้าบุคคล_บริษัทในเครือธนาคารกสิกรไทย"
                                        data-tag="footer"
                                        data-id="personal_fmenu_id_166"
                                        role="button"
                                    >
                                        บริษัทในเครือธนาคารกสิกรไทย
                                    </a>
                                </div>
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} personal_nav_header`}
                                        title="ลูกค้าบุคคล_บริการช่วยเหลือ"
                                        data-tag="footer"
                                        data-id="personal_helpservice"
                                        role="button"
                                    >
                                        บริการช่วยเหลือ
                                    </a>
                                </div>
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} personal_nav_header`}
                                        title="ลูกค้าบุคคล_เครือข่ายในต่างประเทศ"
                                        data-tag="footer"
                                        data-id="personal_contactus"
                                        role="button"
                                    >
                                        เครือข่ายในต่างประเทศ
                                    </a>
                                </div>
                            </div>
                            {/* panelFooterProductList business */}
                            <div
                                className={`${styles.panelFooterProduct} ${footerMenuMobile == "business" ? styles.active : ""}`}
                                data-tag="business"
                            >
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} investor_nav_header`}
                                        title="ลูกค้าธุรกิจ_นักลงทุนสัมพันธ์"
                                        data-tag="footer"
                                        data-id="business_investor"
                                        role="button"
                                    >
                                        นักลงทุนสัมพันธ์
                                    </a>
                                </div>
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} business_nav_header`}
                                        title="ลูกค้าธุรกิจ_เกี่ยวกับเรา"
                                        data-tag="footer"
                                        data-id="business_aboutus"
                                        role="button"
                                    >
                                        เกี่ยวกับเรา
                                    </a>
                                </div>
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} business_nav_header`}
                                        title="ลูกค้าธุรกิจ_บริษัทในเครือธนาคารกสิกรไทย"
                                        data-tag="footer"
                                        data-id="business_fmenu_id_179"
                                        role="button"
                                    >
                                        บริษัทในเครือธนาคารกสิกรไทย
                                    </a>
                                </div>
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} business_nav_header`}
                                        title="ลูกค้าธุรกิจ_บริการช่วยเหลือ"
                                        data-tag="footer"
                                        data-id="business_fmenu_id_30"
                                        role="button"
                                    >
                                        บริการช่วยเหลือ
                                    </a>
                                </div>
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} business_nav_header`}
                                        title="ลูกค้าธุรกิจ_เครือข่ายในต่างประเทศ"
                                        data-tag="footer"
                                        data-id="business_contactus"
                                        role="button"
                                    >
                                        เครือข่ายในต่างประเทศ
                                    </a>
                                </div>
                            </div>
                            {/* panelFooterProductList wealth */}
                            <div
                                className={`${styles.panelFooterProduct} ${footerMenuMobile == "wealth" ? styles.active : ""}`}
                                data-tag="wealth"
                            >
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} investor_nav_header`}
                                        title="ลูกค้า Wealth_นักลงทุนสัมพันธ์"
                                        data-tag="footer"
                                        data-id="wealth_investor"
                                        role="button"
                                    >
                                        นักลงทุนสัมพันธ์
                                    </a>
                                </div>
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} wealth_nav_header`}
                                        title="ลูกค้า Wealth_เกี่ยวกับเรา"
                                        data-tag="footer"
                                        data-id="wealth_aboutus"
                                        role="button"
                                    >
                                        เกี่ยวกับเรา
                                    </a>
                                </div>
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} wealth_nav_header`}
                                        title="ลูกค้า Wealth_บริษัทในเครือธนาคารกสิกรไทย"
                                        data-tag="footer"
                                        data-id="wealth_fmenu_id_180"
                                        role="button"
                                    >
                                        บริษัทในเครือธนาคารกสิกรไทย
                                    </a>
                                </div>
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} wealth_nav_header`}
                                        title="ลูกค้า Wealth_บริการช่วยเหลือ"
                                        data-tag="footer"
                                        data-id="wealth_helpservice"
                                        role="button"
                                    >
                                        บริการช่วยเหลือ
                                    </a>
                                </div>
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} wealth_nav_header`}
                                        title="ลูกค้า Wealth_เครือข่ายในต่างประเทศ"
                                        data-tag="footer"
                                        data-id="wealth_fmenu_id_125"
                                        role="button"
                                    >
                                        เครือข่ายในต่างประเทศ
                                    </a>
                                </div>
                            </div>
                            {/* panelFooterProductList investor */}
                            <div
                                className={`${styles.panelFooterProduct} ${footerMenuMobile == "investor" ? styles.active : ""}`}
                                data-tag="investor"
                            >
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} investor_nav_header`}
                                        title="นักลงทุนสัมพันธ์_นักลงทุนสัมพันธ์"
                                        data-tag="footer"
                                        data-id="investor_investor"
                                        role="button"
                                    >
                                        นักลงทุนสัมพันธ์
                                    </a>
                                </div>
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} investor_nav_header`}
                                        title="นักลงทุนสัมพันธ์_เกี่ยวกับเรา"
                                        data-tag="footer"
                                        data-id="investor_aboutus"
                                        role="button"
                                    >
                                        เกี่ยวกับเรา
                                    </a>
                                </div>
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} investor_nav_header`}
                                        title="นักลงทุนสัมพันธ์_บริษัทในเครือธนาคารกสิกรไทย"
                                        data-tag="footer"
                                        data-id="investor_fmenu_id_256"
                                        role="button"
                                    >
                                        บริษัทในเครือธนาคารกสิกรไทย
                                    </a>
                                </div>
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} investor_nav_header`}
                                        title="นักลงทุนสัมพันธ์_บริการช่วยเหลือ"
                                        data-tag="footer"
                                        data-id="investor_helpservice"
                                        role="button"
                                    >
                                        บริการช่วยเหลือ
                                    </a>
                                </div>
                                <div className={styles.panelMenuProduct}>
                                    <a
                                        href="javascript:void(0);"
                                        target="_self"
                                        className={`${styles.panelMenuList} ${styles.linkGo} investor_nav_header`}
                                        title="นักลงทุนสัมพันธ์_เครือข่ายในต่างประเทศ"
                                        data-tag="footer"
                                        data-id="investor_contactus"
                                        role="button"
                                    >
                                        เครือข่ายในต่างประเทศ
                                    </a>
                                </div>
                            </div>
                            <div className={styles.footerContactSpace}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------------------  End Mobile   ------------------------------- */}
        </Fragment>
    );
}