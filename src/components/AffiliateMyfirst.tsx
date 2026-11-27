// A8「myFirst Japan」提携コード（s00000022215001・テキストリンク・img ピクセル版。2026-11-27 MediaXAI 承認）。コードは改変しない。
// 計測リンク（px.a8.net）・計測ピクセル（*.a8.net/0.gif）は開かない・curl しない（自己クリック扱いになるため）。
// クリックリンクと 1x1 ピクセルは必ずセットで出す。
const TEXT_LINK =
  '<a href="https://px.a8.net/svt/ejp?a8mat=4BGV64+893G9U+4REU+626XU" rel="nofollow">GPSキッズスマートウォッチ、キッズカメラなどのご購入は【myFirst Japan】</a>\n<img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4BGV64+893G9U+4REU+626XU" alt="">';

/** テキストリンク：myFirst Fone のレビュー・比較・知識記事の結論/関連情報枠、ランキングの myFirst 行 */
export function MyfirstAffText({ className = '' }: { className?: string }) {
  return (
    <span className={`aff-text ${className}`}>
      <span style={{ display: 'inline-block', fontSize: 10, lineHeight: '16px', padding: '0 5px', marginRight: 6, border: '1px solid #9ca3af', borderRadius: 3, color: '#6b7280', verticalAlign: 'middle' }}>PR</span>
      <span dangerouslySetInnerHTML={{ __html: TEXT_LINK }} />
    </span>
  );
}
