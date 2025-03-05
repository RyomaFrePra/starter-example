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
        </div>

    );
  }
  