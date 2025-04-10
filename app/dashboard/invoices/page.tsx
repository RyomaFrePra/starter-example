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
                    <li>療養の給付
                      <ul>
                        <li>社会復帰促進等事業として設置された病院・診療所（労災病院等）</li>
                        <li>都道府県労働局長が指定する病院・診療所、薬局、訪問看護事業者（指定医療機関）</li>
                        <li>厚生労働大臣の指定ではない</li>
                      </ul>
                     </li>
                     <li>業務災害は3日間は事業者が支払う。通勤災害は支払わない。</li>
                     <li>年金は傷病が1~3級(313,277,245)、障害が1~7級</li>
                     <li>葬祭料(以下の高い方)
                      <ul>
                        <li>315,000円 + 給付基礎日額の30日分</li>
                        <li>給付基礎日額の60日分</li>
                      </ul>
                     </li>
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
  