"use client";

import { useEffect, useState } from "react";
interface NavProps {
  officialDomains: string[];
  redirectPath: string
}

export default function Nav({ officialDomains }: NavProps) {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState<string | null>(null);

  async function checkDomains(domains: string[]) {
    setLoading(true);
    const startTime = Date.now();

    for (const domain of domains) {
      try {
        const res = await fetch(`https://${domain}`, {
          method: "HEAD",
          mode: "cors",
        });
        if (res.ok) {
          const elapsed = Date.now() - startTime;
          const remain = 3000 - elapsed;
          if (remain > 0) await new Promise((r) => setTimeout(r, remain));
          setUrl(`https://${domain}${sessionStorage.getItem('redirected_from') || ""}`);
          setLoading(false);
          return;
        }
      } catch {
      }
    }
    const elapsed = Date.now() - startTime;
    const remain = 3000 - elapsed;
    if (remain > 0) await new Promise((r) => setTimeout(r, remain));
    setUrl(null);
    setLoading(false);
  }

  useEffect(() => {
    if (officialDomains.length > 0) {
      checkDomains(officialDomains);
    } else {
      setUrl(null);
      setLoading(false);
    }
  }, [officialDomains]);

  function handleAddToFavorites() {
    const title = document.title;
    const url = window.location.href;
    alert("请使用 Ctrl+D 将本页加入收藏夹");
  }
  const buttonBaseClass ="inline-flex justify-center items-center w-48 px-6 py-2 rounded-full font-semibold text-white cursor-pointer";

  return (
    <div className="text-center space-y-3">
      <p className="text-red-600 font-semibold animate-pulse text-2xl">
        ⚠️ 收藏此页防止失联
      </p>
      <div>
        <button
          onClick={handleAddToFavorites}
          className={`${buttonBaseClass} bg-teal-600 hover:bg-teal-700`}
        >
          添加到收藏夹
        </button>
      </div>
      {loading ? (
        <button
          disabled
          className={`${buttonBaseClass} bg-gray-300 text-gray-700 cursor-not-allowed`}
        >
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          正在检测官网可用域名...
        </button>
      ) : url ? (
        <button
          onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
          className={`${buttonBaseClass} bg-teal-600 hover:bg-teal-700`}
        >
          打开官网
        </button>
      ) : (
        <button
          disabled
          title="官网暂不可用"
          className={`${buttonBaseClass} bg-gray-400 text-gray-700 cursor-not-allowed`}
        >
          官网暂不可用
        </button>
      )}
    </div>
  );
}
