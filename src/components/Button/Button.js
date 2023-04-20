import styles from './Button.module.scss';

const Button = props => {
    return (<button className={styles.button} text={props.text} />);
};

export default Button;