function Legend() {
  return (
    <div className="legend">
      <div className="legend-title"> Edge Types </div>
      <div className="legend-row">
        <span className="legend-swatch legend-consumes" />
        <span>Consumes</span>
      </div>
      <div className="legend-row">
        <span className="legend-swatch legend-association" />
        <span>Association</span>
      </div>
    </div>
  );
}
export default Legend;
