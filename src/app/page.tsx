import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadButton from "@/components/Nav";
import { getOfficialDomains } from "@/lib/getOfficialDomains";
import config from "../../config";

export default async function Page() {
  const officialDomains = await getOfficialDomains();
  const { backgroundImage, primaryColor } = config.theme;

  return (
    <main
      className="min-h-screen px-4 py-10"
      style={{
        backgroundImage: backgroundImage || undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4 text-white drop-shadow">
          青瓦, 欢迎您访问
        </h1>
        <div className="text-center mb-6">
          <DownloadButton officialDomains={officialDomains} redirectPath={""} />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {config.clients.map((client) => (
            <div
              key={client.os}
              className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between hover:shadow-lg transition relative"
            >
              <div className="text-center mb-4">
                <FontAwesomeIcon
                  icon={client.icon}
                  size="2x"
                  className="text-gray-700 mb-2"
                />
                <h3 className="text-lg font-semibold">{client.name}</h3>
                <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
                  {client.description}
                </p>
              </div>

              <div className="flex flex-col gap-2 justify-evenly flex-grow">
                {client.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white text-center py-2 rounded-full font-medium"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
