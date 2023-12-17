import Layout from "@/components/Layout";

const Verified = () => {
    return (
        <>
            <Layout>
                <div className="main_width">
                    <div className="container">
                        <div className="Verifiedcat">
                            <h2><img src="images/veri1.png" /><img src="images/star.png" />Verified Set up<img src="images/star.png" /><img
                                src="images/veri2.png" /></h2>
                        </div>
                    </div>

                    <div className="Verification-page">
                        <div className="container">
                            <div className="col-sm-6">
                                <div className="col-Verification">
                                    <p>Verification Set Up </p>
                                    <p>Please upload a Valid Photo iD and your picture. this will validate who you say you are. and open many
                                        features available to you. this will prove trust worthy to users that need a Chef booked. receiving gifts
                                        or coins from other users. insures that the recipe you cooked is you!</p>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="Settings-Verification">
                                        <div className="Verification-nput"><label>Name:</label>
                                            <input type="text" name="" />
                                        </div>
                                    </div>
                                    <div className="Settings-Verification-list">
                                        <h4>Your Settings info</h4>
                                        <ul>
                                            <li>Name:<span> Jone Wick</span></li>
                                            <li>email:<span> Jwickfood@ymail.com</span></li>
                                            <li>User Name: <span> @zhr_nurkhaula</span></li>
                                            <li>contact: <span> (612)781-8721</span></li>
                                            <li>dob: <span> 12/15/80</span></li>
                                            <li>sex:<span> M</span></li>
                                            <li>country: <span> U.S.</span></li>
                                            <li>city:<span> Los Angeles</span></li>
                                            <li>state:<span> CA</span></li>
                                            <li>Zip code: <span>60612</span></li>

                                        </ul>
                                        <label><input type="checkbox" /> Is this information correct and current?</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="uoload-Verification">
                                        <div className="uoload-Verification1">
                                            <span>Photo I.D.</span><label for="Photoid">Upload</label>
                                            <input type="filw" name="" id="Photoid" />
                                        </div>
                                        <div className="uoload-Verification2">
                                            <span>Your Photo</span><label for="Photoid">Upload</label>
                                            <input type="filw" name="" id="Photoid" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="Uploading">
                                        <h3>Uploading your iD is Required for <span>Gold</span> Verification this is the <span>Gold</span>
                                            standard.</h3>
                                        <h5>Blue Verifications it is not required but encouraged.</h5>
                                        <button>Complete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Verified;