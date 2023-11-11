
import style from './SubHead.module.css'



function SubHead({subtitle,title}) {
  return (
    <div className={style.subHead}>
        <h5 >{subtitle}</h5>
        <h2 className={style.subHeadH2}>{title}</h2>
    </div>
  )
}

export default SubHead