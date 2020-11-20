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
import {person, restaurantOutline, navigate, barcodeOutline} from 'ionicons/icons';


const AddToPantry: React.FC = () => {


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
            Add to Pantry
        </IonLabel>
    </IonItem>

    <IonItem>
      <IonLabel id="navInput">

        <IonInput placeholder="Enter UPC or Item Name"></IonInput>
          <IonButton>
            Add to Pantry
            <IonIcon icon={navigate}></IonIcon>
          </IonButton>
        </IonLabel>
    </IonItem>


<div className="ion-text-center ion-padding">

  <IonIcon icon={barcodeOutline}></IonIcon>


</div>

<div  id ="placeholder" className="bar bar-header bar-positive">
 <h1>Or Scan an Item</h1>
</div>

<div id="placeholder">

This is where the UPC Scanner Integration will go.<div></div>

</div>
<div className="ion-text-center ion-padding">
  <IonButton size="large">Open Pantry</IonButton>
  <IonButton  size="large">View Recipes</IonButton>
</div>

</IonContent>

  </IonApp>
);
};

export default AddToPantry;
