import React from 'react';
import AutocorrectTextarea from '../components/AutocorrectTextarea';
import { corrections } from '../constants/corrections'; // Importamos las correcciones

const Home: React.FC = () => {
    return (
        <div className="App">
            <h1>Autocorrection App</h1>
            <AutocorrectTextarea corrections={corrections} />
        </div>
    );
};

export default Home;
