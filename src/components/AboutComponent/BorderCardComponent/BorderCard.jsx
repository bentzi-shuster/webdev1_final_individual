import styles from "./bordercard.module.css"
export default function BorderCard(props) {
return (
<div className={styles.bordercardborder}>
<div className={styles.bordercard}>
{props.children}
</div>
</div>
)

}