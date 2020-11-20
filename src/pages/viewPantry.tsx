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
     IonList, IonInput, IonCol, IonRow, IonGrid, IonSearchbar, IonCheckbox} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';



const ViewPantry: React.FC = () => {


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
            View Pantry
        </IonLabel>
    </IonItem>

    <IonSearchbar placeholder="Search Ingredients"></IonSearchbar>

    <IonGrid id = "recipeGrid" className="ion-align-self-center" >

      <IonRow >
        <IonCol size = "2">
          Ingredient Name
        </IonCol>

        <IonCol size = "2"> Quantity </IonCol>

        <IonCol size = "2">
          Date Added
        </IonCol>

        <IonCol size = "2">
          Options
        </IonCol>


      </IonRow>

      <IonRow>
        <IonCheckbox color="primary"></IonCheckbox>
        <IonCol size = "2">
          Item 1
        </IonCol>
        <IonCol size = "2"> 1 </IonCol>

        <IonCol size = "2">
          1/23/2020
        </IonCol>

        <IonCol size = "2" className= "ion-no-padding">
          <IonButton size="small">  Remove</IonButton> / <IonButton size="small"> Edit </IonButton>
        </IonCol>

      </IonRow>

      <IonRow>
        <IonCheckbox color="primary"></IonCheckbox>
        <IonCol size = "2">
          Item 2
        </IonCol>

        <IonCol size = "2"> 3 </IonCol>

        <IonCol size = "2">
          1/3/2021
        </IonCol>

        <IonCol size = "2" className= "ion-no-padding">
          <IonButton size="small" >  Remove</IonButton> / <IonButton size="small"> Edit </IonButton>
        </IonCol>

      </IonRow>
</IonGrid>

    <div  id ="placeholder" className ="bar bar-header bar-positive">

    </div>

    <div id="placeholder">

    </div>
    <div className="ion-text-center ion-padding">
        <IonButton size="large">Add to Pantry</IonButton>
        <IonButton  size="large">Find Recipes</IonButton>
    </div>

  </IonContent>
 </IonApp>

);
};

export default ViewPantry;
