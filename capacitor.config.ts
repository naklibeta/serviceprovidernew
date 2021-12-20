import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.service.naklibeta.nakli_beta_service_provider',
  appName: 'NakliBeta Partner',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    "SplashScreen": {
      "launchShowDuration": 0,
      "launchAutoHide": false,
      "showSpinner": true
    }
  }
};

export default config;
