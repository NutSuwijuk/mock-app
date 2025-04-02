import Image from "next/image"

const LogoImage = () => {
  return (
    // <div>
      <Image
          src="/images/hos.jpg"
          alt="Logo App"
          width={150}
          height={150}
          style={{
            maxWidth: "100%",
            height: "auto",
            width: "auto",
            objectFit: "contain",
          }}
        />
    // </div>
  )
}
export default LogoImage