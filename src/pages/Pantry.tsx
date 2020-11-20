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
     IonList} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import {person, restaurantOutline} from 'ionicons/icons';


const Pantry: React.FC = () => {
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
         Fridge Filler
     </IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent>
  <IonItem>
  <IonLabel>
      Pantry Home
  </IonLabel>
  </IonItem>
  <div className="ion-text-center ion-padding">
      <IonIcon id="largeIcon"  name="restaurant-outline"></IonIcon>


  </div>

  <div className="ion-text-center ion-padding">
      <IonButton size="large">Open Pantry</IonButton>
      <IonButton  size="large">View Recipes</IonButton>
  </div>

  </IonContent>

  </IonApp>
);
};

export default Pantry;
