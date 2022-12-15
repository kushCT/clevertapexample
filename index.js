/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from './App';
Navigation.registerComponent('clevertapexample', () => App);
Navigation.events().registerAppLaunchedListener(() => {
 Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'clevertapexample'
             }
           }
         ]
       }
     }
  });
});
