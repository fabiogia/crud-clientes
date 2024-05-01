'use client'
import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './use-pagination';
import './pagination.css';

interface PaginationProps {
    onPageChange: any,
    totalCount: number,
    siblingCount: number,
    currentPage: number,
    pageSize: number,
    className: string
}

export const Pagination = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
}: PaginationProps) => {

    let paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });
    if (!paginationRange) paginationRange = [];

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const localPageChange = (page: number) => {
        onPageChange(page);
    }

    const onNext = () => {
        localPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        localPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={classnames('pagination-container', { [className]: className })}
        >
            <li key={'previous'}
                className={classnames('pagination-item', {
                    disabled: currentPage === 1
                })}
                onClick={onPrevious}
            >
                <div className="arrow left" />
            </li>
            {paginationRange.map(pageNumber => {
                if (pageNumber === DOTS) {
                    return <li className="pagination-item dots">&#8230;</li>;
                }

                return (
                    <li key={pageNumber}
                        className={classnames('pagination-item', {
                            selected: pageNumber === currentPage
                        })}
                        onClick={() => {
                            if (typeof pageNumber === 'number') {
                                localPageChange(pageNumber as number);
                            }
                        }}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li key={'next'}
                className={classnames('pagination-item', {
                    disabled: currentPage === lastPage
                })}
                onClick={onNext}
            >
                <div className="arrow right" />
            </li>
        </ul>
    );
};

export default Pagination;
