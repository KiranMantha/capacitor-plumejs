import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.capacitorplumejs.com',
  appName: 'capacitor-plumejs',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
