import React from "react"
import Live from "./Live"
import Countdown from "./Countdown"
import styles from "./BannerContent.module.css"

const BannerContent: React.FC = () => {
  return (
    <div className={styles.bannerContent}>
      <div className={styles.live}>
        <Live width={24} height={24} />
      </div>
      <span>
        Analisis Survei Awal Periode 2024 -{" "}
        <Countdown date="2024-03-31T00:00:00+07:00" />
      </span>
    </div>
  )
}

export default BannerContent
