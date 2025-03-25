import OtherSettings from "@/components/AdminUI/AdminOptions";

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {

  return (
    <>
    <div style={styles.container}>
    <OtherSettings/>
    <div style={styles.content}>
    {children}
    </div>
    </div>
    </>
  );
};

export default Layout;

const styles = {
    container: { 
      display: "flex", 
      padding: "20px",
      
    },
    content: {
        width: "100%",
        height: "100%",
        overflow: "auto",
    },
};
