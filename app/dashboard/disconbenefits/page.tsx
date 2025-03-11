import AddCalculate from './add_calculate';

export default function Page() {
    return (
        <div>
            <AddCalculate /> {/* AddCalculateコンポーネントを表示 */}
            <div style={{ marginTop: '40px' }}>
                <h1>総括安全衛生管理者</h1>
                <img src="/総括安全衛生管理者.png"  width={300} height={200} />
            </div>
            <div style={{ marginTop: '40px' }}>
                <h1>安全管理者(専属must)</h1>
                <ul>
                    <li>厚生労働大臣の定める研修 + 実務</li>
                    <li>大卒+2年 or 高卒+4年</li>
                    <li>巡視：頻度なし</li>
                </ul>
                <img src="/安全管理者.png"  width={300} height={200} />
                <h2>専任要件</h2>
                <img src="/安全管理者_専任.png"  width={300} height={200} />
            </div>
            <div style={{ marginTop: '40px' }}>
                <h1>衛生管理者(専属must)</h1>
                <ul>
                    <li>都道府県労働局長の免許(1種・2種)</li>
                    <li>保健師、薬剤師</li>
                    <li>衛生工学衛生管理者</li>
                    <li>巡視：週１回</li>
                </ul>
                <img src="/衛生管理者.png"  width={300} height={200} />
                <h2>専任要件</h2>
                <img src="/衛生管理者_専任.png"  width={300} height={200} />
            </div>
            <div style={{ marginTop: '40px' }}>
                <h1>労災と雇用保険</h1>
                <img src="/労災と雇用保険_対象比較.png"  width={300} height={200} />
            </div>
            <div style={{ marginTop: '40px' }}>
                <h1>労災と雇用保険の二元適用</h1>
                <ul>
                    <li>都道府県及び市町村の行う事業</li>
                    <li>港湾運送</li>
                    <li>農林・畜産・養蚕・水産</li>
                    <li>建設</li>
                </ul>
            </div>
            <div style={{ marginTop: '40px' }}>
                <h1>労災保険法で賃金に該当しないもの</h1>
                <ul>
                    <li>休業補償</li>
                    <li>業務外のけがに対する恩恵的な休業手当</li>
                    <li>結婚祝金、死亡弔慰金、災害見舞金など(支給要件が明確でも該当しない)</li>
                    <li>退職金・退職一時金(賃金の一部に含める場合は該当する)</li>
                </ul>
            </div>
            <div style={{ marginTop: '40px' }}>
                <h1>労災保険法　賃金総額の特例</h1>
                <img src="/労災保険_賃金総額の特例.png"  width={300} height={200} />
            </div>
            <div style={{ marginTop: '40px' }}>
                <h1>特定機械の一覧</h1>
                <img src="/特定機械一覧.png"  width={300} height={200} />
            </div>
            <div style={{ marginTop: '40px' }}>
                <h1>特定機械の許可一覧</h1>
                <img src="/特定機械許可者一覧.png"  width={300} height={200} />
            </div>
            <div style={{ marginTop: '40px' }}>
                <h1>延長給付</h1>
                <h2>優先順位</h2>
                <p>個・地・広・全・訓</p>
                <br></br>
                <p>270日or330日 ⇒ 算定期間20年以上 + 35歳以上60歳未満</p>
                <br></br>
                <p>全国は4か月連続給付率4/100、他は2倍</p>
                <h2>個別</h2>
                    <img src="/個別給付.png"  width={300} height={200} />
                <h2>地域</h2>
                    <img src="/地域給付.png"  width={300} height={200} />
                <h2>広域・全国</h2>
                    <p>　90日</p>
                <h2>訓練</h2>
                    <img src="/訓練給付.png"  width={300} height={200} />
            </div>
            <div style={{ marginTop: '40px' }}>
                <h1>推進者系(専属must・専任なし)</h1>
                <div>10~50人で必要</div>
                <br></br>
                <img src="/推進者区分.png"  width={300} height={200} />
            </div>
            <div style={{ marginTop: '40px' }}>
                <h1>委員会系</h1>
                <img src="/安全委員会など.png"  width={300} height={200} />
            </div>
            <div style={{ marginTop: '40px' }}>
                <h1>請負の元方</h1>
                    <div>
                        <h2>Phase0：特定元方とは</h2>
                        <ul>
                            <li>建設業 or 造船業</li>
                            <li>毎作業日の巡視</li>
                            <li>統括安全責任者の具備が必要</li>
                        </ul>
                    </div>
                    <br></br>
                    <div>
                        <h2>Phase1：統括安全責任者</h2>
                        <ul>
                            <li>元方安全衛生管理者の指揮</li>
                            <li>毎作業日の巡視</li>
                            <li>統括安全責任者の具備が必要</li>
                            <li><img src="/統括安全責任者の人数.png"  width={300} height={200} /></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Phase2：元方安全管理者(専属must、専任なし)</h2>
                        <ul>
                            <li>建設業のみ</li>
                            <li>大+実3 or 中高+実5</li>
                            <li>×コンサル</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Phase3：店社安全衛生管理者</h2>
                        <ul>
                            <li>建設業のみ</li>
                            <li>月1回の巡視</li>
                            <li>大高+実3 or 中高+実5 or 実8</li>
                            <li><img src="/店社安全衛生管理者の条件.png"  width={300} height={200} /></li>
                        </ul>
                    </div>          
            </div>
            <div style={{ marginTop: '40px' }}>
                <h1>請負側</h1>
                <h2>安全衛生管理者</h2>
                <ul>
                    <li>統括安全衛生責任者がいる場合に必要</li>
                    <li>連絡係なので特に資格等の要件はない</li>
                </ul>
            </div>
        </div>
        

    );
  }
  