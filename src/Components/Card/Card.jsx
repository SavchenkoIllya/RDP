/* eslint-disable jsx-a11y/alt-text */
import { useRef, forwardRef, useImperativeHandle } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

// styles
import styled from "@emotion/styled";
import { StyleConstants } from "@styles/variables";
import { Heading } from "@components/Heading";
import { LoadableImg } from "./LoadableImg";
import defaultPic from "@assets/default.webp";

/**
 * @param {title} title
 * @param {description} description
 * @param {pictureUrl} pictureUrl
 * @param {id} id
 * @param rest you can pass also extra props which would be inserted in card wrapper
 * @example <Card className="custom__class" aria-label="card-with-link"/>
 */

export const Card = forwardRef(
  ({ title, description, pictureUrl, id, ...props }, ref) => {
    const cardRef = useRef(null);
    const { page } = useParams();

    useImperativeHandle(ref, () => ({ id, cardRef }));
    return (
      <CardWrapper
        {...props}
        ref={cardRef}
        to={`/${page}/details/${id}`}
        replace
      >
        <CardView>
          <LoadableImg src={pictureUrl} fallback={defaultPic} />
          <CardContent>
            <Heading>{title}</Heading>
            <Description>
              <ReactMarkdown children={description} />
            </Description>
          </CardContent>
        </CardView>
      </CardWrapper>
    );
  }
);

export const CardWrapper = styled(Link)`
  text-decoration: none;
  color: ${StyleConstants.COLORS.WHITE};
  border-radius: 10px;
  filter: drop-shadow(0px 0px 0px ${StyleConstants.COLORS.RED_OPACITY});

  &:hover {
    cursor: pointer;
    transition: filter ease-in-out 0.15s;
    filter: drop-shadow(0px 0px 10px ${StyleConstants.COLORS.RED_OPACITY});
  }
`;

export const CardView = styled.article`
  background: linear-gradient(320.62deg, #292929 -0.04%, #191919 71.54%);
  width: 350px;
  border-radius: 10px;

  @media screen and (max-width: 400px) {
    .card {
      width: 275px;
    }
  }
`;

export const CardContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;

  h1 {
    height: 48px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.25rem;
    text-align: left;
    color: ${StyleConstants.COLORS.RED};
    padding: 0;
  }
`;

export const Description = styled.div`
  height: 150px;
  overflow: hidden;

  p {
    margin-top: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.25rem;
    font-size: 0.8rem;
  }
`;
