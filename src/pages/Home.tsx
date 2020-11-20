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
import {person} from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
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
          Login Page
      </IonLabel>
  </IonItem>
  <div >
      <IonIcon icon={person} color="medium"></IonIcon>

  </div>
  <div className="ion-text-center ionic-padding">
      <IonButton color="primary">Log in</IonButton>
      <IonButton color="primary">Register</IonButton>
  </div>
  </IonContent>
  </IonApp>
);
};

export default Home;
