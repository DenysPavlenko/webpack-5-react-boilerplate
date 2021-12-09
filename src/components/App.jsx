import { useState } from 'react';
import calendar from '../assets/images/calendar.svg';
import Modal from '@/components/Modal';
import styles from './app.module.scss';
import './app.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.app}>
      <button onClick={() => setIsOpen(true)} className="global-class">
        Toggles
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          ipsam praesentium sunt vel labore consectetur enim, explicabo odit
          quis sit quam voluptates vitae quos soluta recusandae similique
          molestiae, accusamus quasi laborum possimus asperiores ipsa facere
          eius. Blanditiis, eos expedita obcaecati doloribus alias eius beatae
          explicabo ut rem quidem animi nesciunt suscipit voluptatibus saepe
          quas hic quis. Reprehenderit debitis voluptatibus maiores accusamus,
          ex placeat tempora repellendus nam exercitationem architecto eaque,
          sit dolorem cum voluptas doloremque dolorum quibusdam natus ipsa
          molestiae neque, asperiores ab iure. Ad cumque, totam, explicabo,
          earum quam illo asperiores delectus hic placeat aperiam quasi
          veritatis molestiae atque itaque.
        </p>
      </Modal>
    </div>
  );
};

export default App;
