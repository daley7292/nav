import dns from "dns/promises";
import config from "../../config";

export async function getOfficialDomains(): Promise<string[]> {
  try {
    const records = await dns.resolveTxt(config.domain);
    const combinedTxts = records.map(record => record.join("")); // 拼成完整字符串
    const allTxt = combinedTxts.join(";");
    const domains = allTxt.split(";"); // 不过滤不 trim
    for (let i = domains.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [domains[i], domains[j]] = [domains[j], domains[i]];
    }

    return domains;
  } catch (error) {
    console.error("获取 DNS TXT 记录失败:", error);
    return [];
  }
}
