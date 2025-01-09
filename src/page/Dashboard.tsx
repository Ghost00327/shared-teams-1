const Dashboard = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.png" alt="Logo" className="App-logo" />
        <button>Button 1</button>
        <button>Button 2</button>
        <input type="text" placeholder="Search..." />
        <button>FAQ</button>
        <button>Exit</button>
      </header>
      <main>
        <section>
          <h2>Company Information</h2>
          <p>Insert company information here.</p>
        </section>
        <section>
          <h2>Input Box</h2>
          <input type="text" placeholder="Enter information..." />
        </section>
        <section>
          <div className="circle-buttons">
            <button className="circle">Profile</button>
            <button className="circle">Tools</button>
            <button className="circle">Files</button>
            <button className="circle">Notes</button>
          </div>
          <button className="square">ACCEPT PROJECT</button>
        </section>
        <section>
          <div className="oblongs">
            <div className="oblong"><div className="inline-oblong">Oblong 1-1</div><div className="inline-oblong">Oblong 1-2</div></div>
            <div className="oblong"><div className="inline-oblong">Oblong 2-1</div><div className="inline-oblong">Oblong 2-2</div></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;