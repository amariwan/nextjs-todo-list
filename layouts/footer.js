const Footer = () => {
  return (
    <footer className="footer-container">
      <p>MIT License 2020 - Created By:</p>
      <a rel="noreferrer" href="https://github.com/amriwan" target="_blank">
        &nbsp;Aland Mariwan
      </a>
      <style jsx>
        {`
          footer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background: var(--accents-2);
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
