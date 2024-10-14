import platform from "platform";

const getDownloadAppUrl = () => {
  const os = platform.os;

  switch (os.family) {
    case "Android":
      return "https://play.google.com/store/apps/details?id=com.swap.swap&hl=en&gl=US&pli=1";

    case "Windows":
      return "https://play.google.com/store/apps/details?id=com.swap.swap&hl=en&gl=US&pli=1";

    case "OS X":
      return "https://apps.apple.com/us/app/swap-by-vitalswap/id1595742241";

    case "Mac OS":
      return "https://apps.apple.com/us/app/swap-by-vitalswap/id1595742241";

    case "iOS":
      return "https://apps.apple.com/lb/app/swap-by-vitalswap/id1595742241";

    default:
      return "https://play.google.com/store/apps/details?id=com.swap.swap&hl=en&gl=US&pli=1";
  }
};

export default getDownloadAppUrl;
