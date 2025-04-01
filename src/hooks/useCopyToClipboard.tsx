import { useState } from "react";

function useCopyToClipboard() {
  const [copied, setCopied] = useState<boolean>(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
      setCopied(false);
    }
  };

  return { copied, copy };
}

export default useCopyToClipboard;


// คัดลอกข้อความไปยัง Clipboard

// import useCopyToClipboard from './hooks/useCopyToClipboard';

// const CopyComponent = () => {
//   const { copied, copy } = useCopyToClipboard();

//   return (
//     <div>
//       <button onClick={() => copy("Hello, world!")}>Copy Text</button>
//       {copied && <p>Text copied to clipboard!</p>}
//     </div>
//   );
// };