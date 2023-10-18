import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Brand } from '../../shared/Brand';
import { remult } from 'remult';
import Chip from '../Chip';
import { Chips, Container } from './styles';

const Videos = () => {
  const navigate = useNavigate();

  const [brand, setBrand] = useState<string>('all');
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    (async () => {
      const data = await remult.repo(Brand).find();
      setBrands(data);
    })();
  }, []);

  return (
    <Container>
      <h3 onClick={() => navigate('/videos')}>Promotion</h3>
      <Chips>
        {brands.map(b => (
          <Chip
            key={b.id}
            brand={b.brand_name}
            selected={false}
          />
        ))}
      </Chips>
      <Outlet />
    </Container>
  );
};

export default Videos;
