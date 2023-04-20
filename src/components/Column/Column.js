import styles from './Column.module.scss';

const Column = props => {
    return (
    <article className={styles.column}>
        <span className={styles.icon + ' fa fa-' + props.icon} />
        <h2 className={styles.title}>{props.title}</h2>
    </article>);
};

export default Column;