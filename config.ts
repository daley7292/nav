// config.ts
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faWindows, faAndroid, faApple, faLinux } from "@fortawesome/free-brands-svg-icons";

export interface ClientLink {
  label: string;
  url: string;
}

export interface ClientItem {
  os: string;
  device: string;
  name: string;
  description: string;
  icon: IconDefinition;
  links: ClientLink[];
}

const config = {
  name:"青瓦",
  domain:"nav.bluetile.biz",
  theme:{
    backgroundImage: "url('https://stb.haitunt.org/uploads/20250609/mbozhclr408qsid3o7j.jpg')",  // 背景图片
    primaryColor: "#0d9499",
  },
  clients: <ClientItem[]>[
    {
      os: "windows",
      device: "Windows 设备",
      name: "Windows 安装版",
      description:
        "适用于 Windows10/11 的标准 .exe 安装包。版本1用不了的换版本2试试",
      icon: faWindows,
      links: [
        {
          label: "版本1",
          url: "https://download.bluetile.biz/Vertox/windows.exe",
        },
        {
          label: "版本2",
          url: "https://download.bluetile.biz/Bluetile/bluetile-3.0.2-windows-amd64-setup.exe",
        },
      ],
    },
    {
      os: "android",
      device: "Android 设备",
      name: "Android 版",
      description:
        "适用于 Android 8.0 及以上版本的 APK。版本1用不了的换版本2试试",
      icon: faAndroid,
      links: [
        {
          label: "版本1",
          url: "https://download.bluetile.biz/Vertox/android.apk",
        },
        {
          label: "版本2",
          url: "https://download.bluetile.biz/Bluetile/bluetile-3.0.2-android-arm64-v8a.apk",
        },
        {
          label: "版本3",
          url: "https://download.bluetile.biz/Bluetile/bluetile-3.0.2-android-arm64-v7a.apk",
        },
      ],
    },
    {
      os: "macos",
      device: "macOS 设备",
      name: "macOS 版本",
      description: "请确认好您电脑的芯片再下载哦。此版本用不了的换特殊版本试试",
      icon: faApple,
      links: [
        {
          label: "intel芯片",
          url: "https://download.bluetile.biz/Vertox/macos-x64.pkg",
        },
        {
          label: "M芯片",
          url: "https://download.bluetile.biz/Vertox/macos-arm.pkg",
        },
      ],
    },
    {
      os: "macos-m1",
      device: "macOS 设备",
      name: "macOS 特殊版本",
      description:
        "请确认好您电脑的芯片再下载哦。常规版本用不了的换这个试试，功能都一样哦",
      icon: faApple,
      links: [
        {
          label: "intel芯片",
          url: "https://download.bluetile.biz/Bluetile/bluetile-3.0.2-macos-amd64.dmg",
        },
        {
          label: "M芯片",
          url: "https://download.bluetile.biz/Bluetile/bluetile-3.0.2-macos-arm64.dmg",
        },
      ],
    },
    {
      os: "ios",
      device: "iOS 设备",
      name: "iOS 版",
      description:
        "我们的客户端暂未上架 App Store，请使用 TF 版本。下方是安装教程",
      icon: faApple,
      links: [
        {
          label: "TF 版教程",
          url: "https://svip888.bluetile.biz/官方客户端/ios系统",
        },
      ],
    },
    {
      os: "linux",
      device: "Linux 设备",
      name: "Linux 版",
      description:
        "请确认您所使用的发行版支持安装我们的客户端。若不支持，请参阅 Clash 安装项目。",
      icon: faLinux,
      links: [
        {
          label: "AppImage",
          url: "https://download.bluetile.biz/Bluetile/bluetile-3.0.2-linux-amd64.AppImage",
        },
        {
          label: "DEB",
          url: "https://download.bluetile.biz/Bluetile/bluetile-3.0.2-linux-amd64.deb",
        },
        {
          label: "RPM",
          url: "https://download.bluetile.biz/Bluetile/bluetile-3.0-2-linux-amd64.rpm",
        },
      ],
    },
  ],
};

export default config;
