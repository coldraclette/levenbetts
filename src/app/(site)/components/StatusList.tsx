'use client';

import { useState } from 'react';
import Link from 'next/link';

import Modal from './Modal';

interface StatusListProps {
  projects: any;
}

export default function StatusList({ projects }: StatusListProps) {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className="mt-4">
      <div className="hidden overflow-x-auto md:flex">
        <div
          className="w-max max-w-[615px] p-4 pl-0"
          style={{
            columnWidth: '615px',
            columnGap: '1rem',
            height: '90vh',
          }}
        >
          <h2>Current</h2>
          {projects.current.map((project: any) => {
            return (
              <div key={project._id} className="inline-block">
                {project.slug && (
                  <Link
                    href={`/work/${project.category.title}/${project.slug.current}`}
                    className="mr-40 break-inside-avoid"
                  >
                    {project.title}
                    {project.subtitle && `, ${project.subtitle}`}
                  </Link>
                )}
                {!project.slug && (
                  <p className="mr-40 break-inside-avoid">
                    {project.title}{' '}
                    {project.subtitle && `, ${project.subtitle}`}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div
          className="w-max max-w-[615px] p-4 pl-0"
          style={{
            columnWidth: '615px',
            columnGap: '1rem',
            height: '90vh',
          }}
        >
          <h2>Complete</h2>
          {projects.complete.map((project: any, index: number) => {
            return (
              <div
                key={project._id}
                className="inline-block"
                onMouseEnter={() => {
                  setModal({ active: true, index });
                }}
                onMouseLeave={() => {
                  setModal({ active: false, index });
                }}
              >
                {project.slug && (
                  <Link
                    href={`/work/${project.category.title}/${project.slug.current}`}
                    className="mr-40 break-inside-avoid"
                  >
                    {project.title}
                    {project.subtitle && `, ${project.subtitle}`}
                  </Link>
                )}
                {!project.slug && (
                  <p className="mr-40 break-inside-avoid">
                    {project.title}
                    {project.subtitle && `, ${project.subtitle}`}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <Modal projects={projects.complete} modal={modal} />
      </div>
      <div className="md:hidden">
        <div className="flex flex-col gap-4 pb-4">
          <div>
            <h2>Current</h2>
            {projects.current.map((project: any, index: number) => {
              return (
                <div key={project._id} className="">
                  {project.slug && (
                    <Link
                      href={`/work/${project.category.title}/${project.slug.current}`}
                      className="flex pl-4 -indent-4"
                    >
                      {project.title}
                      {project.subtitle && `, ${project.subtitle}`}
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
          <div>
            <h2>Complete</h2>
            {projects.complete.map((project: any) => {
              return (
                <div key={project._id} className="inline-block">
                  {project.slug && (
                    <Link
                      href={`/work/${project.category.title}/${project.slug.current}`}
                      className="flex pl-4 -indent-4"
                    >
                      {project.title}
                      {project.subtitle && `, ${project.subtitle}`}
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
  );
}
