import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { server } from '..';
import {
  Container,
  HStack,
  Button,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState('inr');

  const currencySymbol =
    currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';

  const changePage = page => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const url = `${server}/coins/markets?vs_currency=${currency}&page=${page}`;
    const headers = {
      accept: 'application/json',
      'x-cg-demo-api-key': 'CG-PhHo7CvVwCGPttXGFXxaj7J2',
    };
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(url, { headers });
        console.log(data);
        setCoins(data);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent message={'error while fetching Coins'} />;

  return (
    <Container maxW={'container.xl'}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency}>
            <HStack spacing={4}>
              <Radio value="inr">INR</Radio>
              <Radio value="eur">EUR</Radio>
              <Radio value="usd">USD</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
            {coins.map(i => (
              <CoinCard
                id={i.id}
                price={i.current_price}
                key={i.id}
                name={i.name}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack w={'full'} overflowX={'auto'} p={4}>
            {btns.map((item, idx) => (
              <Button
                key={idx}
                bgColor={'blackAlpha.900'}
                color={'white'}
                onClick={() => changePage(idx + 1)}
              >
                {idx + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
