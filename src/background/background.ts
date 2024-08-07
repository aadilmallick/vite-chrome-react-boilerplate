import Runtime from "../utils/api/runtime";
import { SyncStorage } from "../utils/api/storage";

Runtime.onInstall(({ reason }) => {
  console.log("onInstalled...");
  const syncStorage = new SyncStorage({
    darkMode: false,
  });
  syncStorage.getStoragePercentageUsed().then((percentage) => {
    console.log(`Storage used: ${percentage}%`);
  });
});
