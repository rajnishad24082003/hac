import Head from "next/head";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import Testpdf from "./Testpdf";
const Page = () => (
  <>
    <Head>
      <title>testing</title>
    </Head>
    <Testpdf></Testpdf>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
