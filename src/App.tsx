import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp,
   IonHeader, IonRouterOutlet, IonSplitPane,
    IonContent,
     IonToolbar,
     IonItem,
     IonLabel,
     IonIcon,
     IonButton,
     IonTitle,
     IonMenu,
     IonList} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Navigation from './pages/navigation'
import AddToPantry from './pages/addToPantry'
import Pantry from './pages/Pantry'
import './App.css';
import Home from './pages/Home';
import RecipeBrowser from './pages/recipeBrowser';
import ViewPantry from './pages/viewPantry';
import {person} from 'ionicons/icons';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';



/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';




/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  //A few functions stubs, followed by the page rendering.

  //stub for login functionality development
  const loginFunction = () => {};
  //stub for register user function
  const registerFunction = () => {};

return (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">

        <IonRouterOutlet id="main">
          <Route path="/login" component={Home} />
          <Route path="/pantry" component={Pantry} />
          <Route path="/addtopantry" component={AddToPantry} />
          <Route path="/navigation" component={Navigation} />
          <Route path="/recipebrowser" component={RecipeBrowser} />
          <Route path="/viewpantry" component={ViewPantry} />
          <Redirect from="/" to="/login" exact />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
)};

export default App;
