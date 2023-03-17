import styles from './imggrid.module.scss'
import ImgItem from "../IMGItem/IMGItem";

const ImgGrid = () => {
    return (
        <div className={styles.container}>
            <ImgItem src='https://compass-ssl.xbox.com/assets/1d/14/1d14839e-4e17-40e5-a83d-ca225a6c2b2d.jpg?n=Red-Dead-Redemption-II_Gallery-0_1350x759_09.jpg'/>
            <ImgItem src='https://compass-ssl.xbox.com/assets/a4/bd/a4bd526d-70cc-4c61-b788-ea243efb39fa.jpg?n=Red-Dead-Redemption-II_Gallery-0_1350x759_06.jpg'/>
            <ImgItem src='https://compass-ssl.xbox.com/assets/b7/26/b726ccc4-7751-4601-b1df-d3222d95e746.jpg?n=Red-Dead-Redemption-II_Gallery-0_1350x759_05.jpg'/>
            <ImgItem src='https://compass-ssl.xbox.com/assets/5f/7a/5f7a0eec-1acd-4443-9f37-9e5ab07c8eef.jpg?n=Red-Dead-Redemption-II_Gallery-0_1350x759_03.jpg'/>
        </div>
    );
};

export default ImgGrid;