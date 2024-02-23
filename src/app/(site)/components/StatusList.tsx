'use client';

import { useState } from 'react';
import Link from 'next/link';

import { useSwipeHook } from '../hooks/useSwipeHook';
import { useWorkActive } from '../WorkActiveContext';

interface StatusListProps {
  projects: any;
}

export default function StatusList({ projects }: StatusListProps) {
  const { isWorkActive } = useWorkActive();
  const handlers = useSwipeHook();
  return (
    <div
      className={`h-full transition-transform ${
        isWorkActive ? 'translate-y-[126px]' : 'translate-y-0'
      }`}
    >
      <div className="hidden overflow-x-auto scrollbar lg:flex">
        <div
          className="w-1/3 space-y-4 p-4 pl-0"
          style={{
            columnWidth: '610px',
            columnGap: '14px',
            height: 'calc(100vh - 85px)',
          }}
        >
          <h2>Current</h2>
          <div className="flex flex-col">
            {projects.current.map((project: any) => {
              return (
                <div key={project._id}>
                  {project.category?.title && project.slug && (
                    <Link
                      href={`/work/${project.category?.title}/${project.slug?.current}`}
                      className={`inline-block pl-4 -indent-4`}
                    >
                      {project.title}
                      {project.subtitle && `, ${project.subtitle}`}
                    </Link>
                  )}
                  {!project.slug && (
                    <p className={`inline-block pl-4 -indent-4`}>
                      {project.title}
                      {project.subtitle && `, ${project.subtitle}`}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="w-1/3 space-y-4 p-4 pl-0"
          style={{
            columnWidth: '610px',
            columnGap: '14px',
            height: 'calc(100vh - 85px)',
          }}
        >
          <h2>Complete</h2>
          <div className="flex flex-col">
            {projects.complete.map((project: any) => {
              return (
                <div key={project._id} className="inline-block">
                  {project.category?.title && project.slug && (
                    <Link
                      href={`/work/${project.category.title}/${project.slug.current}`}
                      className={`inline-block pl-4 -indent-4`}
                    >
                      {project.title}
                      {project.subtitle && `, ${project.subtitle}`}
                    </Link>
                  )}
                  {!project.slug && (
                    <p className={`inline-block pl-4 -indent-4`}>
                      {project.title}
                      {project.subtitle && `, ${project.subtitle}`}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div {...handlers} className="h-full w-full lg:hidden">
        <div className="flex flex-col gap-4 pb-4">
          <div>
            <h2>Current</h2>
            <div className="flex flex-col">
              {projects.current.map((project: any) => {
                return (
                  <div key={project._id} className="">
                    {project.category?.title && project.slug && (
                      <Link
                        href={`/work/${project.category?.title}/${project.slug?.current}`}
                        className="inline-block pl-4 -indent-4"
                      >
                        <div className="flex">
                          {project.title}
                          {project.subtitle && `, ${project.subtitle}`}
                        </div>
                      </Link>
                    )}
                    {!project.slug && (
                      <p className="flex pl-4 -indent-4">
                        {project.title}
                        {project.subtitle && `, ${project.subtitle}`}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h2>Complete</h2>
            <div className="flex flex-col">
              {projects.complete.map((project: any) => {
                return (
                  <div key={project._id} className="">
                    {project.category?.title && project.slug && (
                      <Link
                        href={`/work/${project.category?.title}/${project.slug?.current}`}
                        className="inline-block pl-4 -indent-4"
                      >
                        <div className="flex">
                          {project.title}
                          {project.subtitle && `, ${project.subtitle}`}
                        </div>
                      </Link>
                    )}
                    {!project.slug && (
                      <p className="flex pl-4 -indent-4">
                        {project.title}
                        {project.subtitle && `, ${project.subtitle}`}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
