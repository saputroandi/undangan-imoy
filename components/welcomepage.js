import { useRouter } from "next/router";
import Falling from "./falling";

function WelcomePage(props) {
  const router = useRouter();
  const { to, sesi } = router.query;
  return (
    <div>
      {/* <Falling /> */}
      <div className="background"></div>
      <div className="welcome-page">
        <div className="header" style={{ color: "rgb(211, 222, 220)" }}>
          <div className="initial" data-aos="fade-right" data-aos-delay="500">
            <h2>Risma</h2>
          </div>
          <div className="divider" data-aos="fade-down" data-aos-delay="500">
            <h2>&</h2>
          </div>
          <div className="initial" data-aos="fade-left" data-aos-delay="500">
            <h2>Kiky</h2>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          style={{ color: "rgb(211, 222, 220)" }}
        >
          <p>
            <strong>Kepada Yth.</strong>
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          style={{ color: "rgb(211, 222, 220)" }}
        >
          <p>Bapak/Ibu/Saudara/i</p>
        </div>
        {to && (
          <div className="nama-tamu" data-aos="fade-up" data-aos-delay="500">
            <p>{to}</p>
            {sesi && <p>Sesi: {sesi}</p>}
          </div>
        )}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          style={{ color: "rgb(211, 222, 220)" }}
        >
          <p>di Tempat</p>
        </div>
        <div
          className="undangan-button"
          onClick={() => props.setDisplayWelcomePage(false)}
        >
          <p>Buka Undangan</p>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap");

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          // border: solid 1px red;
          //https://www.instagram.com/setyariniarum/
        }

        .welcome-page {
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          z-index: 45;
          width: 100%;
          height: 100%;
          // background-color: rgb(254, 251, 243);
          // background-image: url("/asset/gambar_1.JPG");
          // background-position: center;
          // background-size: cover;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0),
            rgba(198, 137, 198, 0.85)
          );
        }

        .header {
          display: flex;
          // gap: 1rem;
          // height: 6rem;
          font-size: 2.8em;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: "Alex Brush", cursive;
        }

        .nama-tamu {
          width: 20rem;
          height: 8rem;
          background-color: rgba(211, 222, 220, 0.77);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2em;
          border-radius: 0.5rem;
          text-align: center;
          gap: 0.85rem;
          flex-direction: column;
        }

        .undangan-button {
          padding: 0.5rem 0.75rem;
          background-color: rgb(198, 137, 198);
          border-radius: 0.25rem;
          animation: welcome 1s linear 0s infinite alternate;
          box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        }

        .background {
          //   z-index: 40;
          //   background-color: rgb(254, 251, 243);
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          background-image: url("/asset/gambar_1.JPG");
          height: 100%;
          background-position: center;
          background-size: cover;
        }

        @keyframes welcome {
          0% {
            transform: scale(1);
            background-color: rgb(147, 125, 194);
          }
          100% {
            transform: scale(1.05);
            background-color: rgb(198, 137, 198);
          }
        }
      `}</style>
    </div>
  );
}

export default WelcomePage;
