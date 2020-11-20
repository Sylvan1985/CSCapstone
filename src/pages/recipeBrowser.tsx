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
     IonList, IonInput, IonCard, IonFooter, IonRow, IonCol,
      IonCardHeader, IonCardTitle, IonCardContent} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import {person, menu, navigate, star, time, bookmark } from 'ionicons/icons';


const RecipeBrowser: React.FC = () => {

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
          <IonInput placeholder="Search Recipes"></IonInput>

      </IonLabel>
  </IonItem>
  <IonCard>
      <IonItem>

        <IonLabel>
          <h3>Cuisine Type ? </h3>
          <p>Added : Dec 10, 2019</p>
        </IonLabel>
      </IonItem>

      <IonCardHeader>
        <IonCardTitle>Recipe Name</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Brief description of the recipe. tapping this or the cuisine/added label will open up the recipe.
      </IonCardContent>

      <IonFooter>
        <IonRow>
          <IonCol >
            <button>
              <IonIcon  id="mediumIcon" icon={star}></IonIcon>
              <div>Rating</div>
            </button>
          </IonCol>
          <IonCol >
            <button>
              <IonIcon  id="mediumIcon" icon={time}></IonIcon>
              <div>Time to make?</div>
            </button>
          </IonCol>
          <IonCol >
            <button>
              <IonIcon  id="mediumIcon" icon={bookmark}></IonIcon>
              <div>Save Recipe</div>
            </button>
          </IonCol>
        </IonRow>
      </IonFooter>
    </IonCard>

    <IonCard>
      <IonItem>

        <IonLabel>
          <h3>Cuisine Type ? </h3>
          <p>Added : Dec 10, 2019</p>
        </IonLabel>
      </IonItem>


      <IonCardHeader>
        <IonCardTitle>Recipe Name</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Brief description of the recipe. tapping this or the cuisine/added label will open up the recipe.
      </IonCardContent>

      <IonFooter>
        <IonRow>
          <IonCol >
            <button>
              <IonIcon  id="mediumIcon" icon={star}></IonIcon>
              <div>Rating</div>
            </button>
          </IonCol>
          <IonCol >
            <button>
              <IonIcon  id="mediumIcon" icon={time}></IonIcon>
              <div>Time to make?</div>
            </button>
          </IonCol>
          <IonCol >
            <button>
              <IonIcon  id="mediumIcon" icon={bookmark}></IonIcon>
              <div>Save Recipe</div>
            </button>
          </IonCol>
        </IonRow>
      </IonFooter>
    </IonCard>
    <IonCard>
      <IonItem>

        <IonLabel>
          <h3>Cuisine Type ? </h3>
          <p>Added : Dec 10, 2019</p>
        </IonLabel>
      </IonItem>


      <IonCardHeader>
        <IonCardTitle>Recipe Name</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Brief description of the recipe. tapping this or the cuisine/added label will open up the recipe.
      </IonCardContent>

      <IonFooter>
        <IonRow>
          <IonCol >
            <button>
              <IonIcon  id="mediumIcon" icon={star}></IonIcon>
              <div>Rating</div>
            </button>
          </IonCol>
          <IonCol >
            <button>
              <IonIcon  id="mediumIcon" icon={time}></IonIcon>
              <div>Time to make?</div>
            </button>
          </IonCol>
          <IonCol >
            <button>
              <IonIcon  id="mediumIcon" icon={bookmark}></IonIcon>
              <div>Save Recipe</div>
            </button>
          </IonCol>
        </IonRow>
      </IonFooter>
    </IonCard>
  </IonContent>
      </IonApp>
);
};

export default RecipeBrowser;
