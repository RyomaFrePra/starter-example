export default function Page() {
    return (
    <div>
      <div style={{ marginTop: '40px' }}>
                <h1>給付の種類</h1>
                <img src="/労災一覧.gif"  width={300} height={800} />
                <img src="/労災一覧2.gif"  width={300} height={800} />
      </div>
      <div style={{ marginTop: '40px' }}>
                <h1>労災について</h1>
                <ul>
                    <li>一般組合員の労働組合大会への出席は通勤とは認めない。(役員は認められる)</li>
                </ul>
      </div>
      <div style={{ marginTop: '40px' }}>
                <h1>給付の種類とスライド</h1>
                <ul>
                    <li>給付基礎日額 = 平均賃金</li>
                    <li>算定自由発生日：事故の日 or 診断日</li>
                    <li>スライドは勤労統計、最低・最高は賃金構造基本統計</li>
                </ul>
                <img src="/労災給付のスライドなど.png"  width={300} height={200} />
      </div>
      
    </div>
    )
  }
  