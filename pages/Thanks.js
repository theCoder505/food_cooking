import Layout from "@/components/Layout";

const Thanks = () => {
    return (
        <>
        <Layout>
            <div className="main_width">
                <div className="container-fluid">
                    <div className="thanks-width">
                        <span><i className="fa fa-check-circle" aria-hidden="true"></i>
                        </span>
                        <p>We use spam reports as a signal to understand </p>
                        <p>problems that we're having with spam on A Chefs Cuisine. </p>
                        <p>If you think that this account violates our Community
                            Guidelines and should be removed, mark it as
                            inappropriate.</p>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    );
}

export default Thanks;