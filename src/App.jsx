import { useState } from 'react';
import logo from './logo.png';
import './App.css';
import MyButton from './components/MyButton';
import ListModal from './components/ListModal';
import { PlusOutlined } from '@ant-design/icons';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  console.log(isModalVisible);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue sur mon application de gestion de listes
        </p>
        <MyButton
          tooltip="Ajouter une liste"
          onClick={() => setIsModalVisible(true)}
          icon={<PlusOutlined />}
        >
          Ajouter une liste
        </MyButton>
        <ListModal modalTitle="Ajouter une liste" isVisible={isModalVisible} handleCancel={() => setIsModalVisible(false)} />
      </header>
    </div>
  );
}