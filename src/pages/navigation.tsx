import { IonApp,
     IonHeader,
     IonContent,
     IonToolbar,
     IonItem,
     IonLabel,
     IonIcon,
     IonButton,
     IonTitle,
     IonMenu,
     IonList, IonInput} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import {person, menu, navigate, mapOutline } from 'ionicons/icons';


const Navigation: React.FC = () => {
  //A few functions stubs, followed by the page rendering.

  //stub for login functionality development
  const loginFunction = () => {};
  //stub for register user function
  const registerFunction = () => {};

return (
  <IonApp>
  <IonHeader>
    <IonToolbar color="primary">
     <IonTitle>
       <IonButton id="mediumIcon"><IonIcon icon={menu}></IonIcon> </IonButton>

       <span id="titleSpan">Fridge Filler</span>
     </IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent>
    <IonItem>
        <IonLabel id="navInput">
            Food Bank Map
            <IonInput placeholder="Enter Address/zipcode/City"></IonInput>
            <IonButton>
                Find Foodbanks
                <IonIcon icon={navigate}></IonIcon>
            </IonButton>
        </IonLabel>
    </IonItem>
    <div className="ion-text-center">
        <IonIcon id="largeIcon" icon={mapOutline} color="medium"></IonIcon>
    </div>
    <div className="ion-padding">Google Maps integration to go here.</div>
  </IonContent>

  </IonApp>
);
};

export default Navigation;
