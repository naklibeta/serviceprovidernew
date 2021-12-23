import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.service.naklibeta.nakli_beta_service_provider',
  appName: 'NakliBeta Partner',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    "SplashScreen": {
      "launchAutoHide": false,
      "showSpinner": false
    }

  }
};

export default config;
