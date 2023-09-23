function RegionFilter({ selectedRegion, onRegionChange }) {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <select value={selectedRegion} onChange={(e) => onRegionChange(e.target.value)}>
      <option value="">All regions</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
}

export default RegionFilter;