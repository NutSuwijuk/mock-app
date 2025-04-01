"use client"; // บอกว่าเป็น Client Component
import React, { Fragment } from "react";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { SingleObject } from "@/model/Test/single-object-res";
import styles from "@/styles/Test/TestDetail.module.scss"
interface serverProps {
    data: SingleObject;
}

export default function TestDetail({ data }: serverProps) {
    const t = useTranslations('HomePage');
    const [dataDetail, setDataDetail] = React.useState(data);
    React.useEffect(() => {

    }, []);
    return (
        <div
            className={styles.main}
        >
            {t("GetStartedByEditing")}
            <div>name :{dataDetail.name}</div>
            {dataDetail.data && (
                <Fragment>
                    <div>CPU model : {dataDetail.data["CPU model"]}</div>
                    <div>Hard disk size : {dataDetail.data["Hard disk size"]}</div>
                    <div>price : {dataDetail.data?.price}</div>
                    <div>year : {dataDetail.data?.year}</div>
                    <div>color :{dataDetail.data?.color}</div>
                    <div>capacity : {dataDetail.data?.capacity}</div>
                </Fragment>
            )}
            <Link href={`/Test/${parseInt(dataDetail.id) + 1}/detail`}>${parseInt(dataDetail.id) + 1}</Link>
        </div>
    );
}